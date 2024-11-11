import { error, fail, redirect } from '@sveltejs/kit';
import { validateData } from '$lib/utils';
import { submitManualJobSchema } from '$lib/schemas';
import { processWithOpenAI } from '$lib/api';

export const load = ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login');
    }
};

export const actions = {
    submitManualJob: async ({ locals, request, fetch }) => {
        const { formData, errors } = await validateData(await request.formData(), submitManualJobSchema);

        if (errors) {
            return fail(400, {
                data: formData,
                errors: errors.fieldErrors
            });
        }

        try {
            // First process with OpenAI
            const aiResponse = await processWithOpenAI({
                company: formData.company,
                jobTitle: formData.jobTitle,
                jobDescription: formData.jobDescription
            }, fetch);

            const aiData = await aiResponse.json();

            // Then create the job application with the AI response
            await locals.pb.collection('jobApplications').create({
                userId: locals.user.id,
                type: 'manual',
                ...formData,
                rawResponse: aiData.cv // Store the AI-generated CV
            });
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }

        throw redirect(303, '/job-applications');
    }
};