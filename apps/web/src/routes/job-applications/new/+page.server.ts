import { error, fail, redirect } from '@sveltejs/kit';
import { validateData } from '$lib/utils';
import { uploadJobDescriptionSchema, submitJobLinkSchema, submitManualJobSchema } from '$lib/schemas';
import { processWithOpenAI } from '$lib/api';

export const load = ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login');
    }
};

export const actions = {
    submitManualJob: async ({ locals, request }) => {
        const { formData, errors } = await validateData(await request.formData(), submitManualJobSchema);

        if (errors) {
            return fail(400, {
                data: formData,
                errors: errors.fieldErrors
            });
        }

        try {
            await locals.pb.collection('jobApplications').create({
                userId: locals.user.id,
                type: 'manual',
                ...formData
            });
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }

        throw redirect(303, '/job-applications');
    }
};