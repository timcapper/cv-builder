import { serializeNonPOJOs } from '$lib/utils.js';
import { error, redirect } from '@sveltejs/kit';

export const load = async ({ locals, params }) => {
    if (!locals.pb.authStore.isValid) {
        throw error(401, 'Unauthorized');
    }

    try {
        const education = serializeNonPOJOs(
            await locals.pb.collection('education').getOne(params.educationId)
        );

        if (locals.user.id === education.userId) {
            return {education};
        } else {
            throw error(403, 'Forbidden');
        }
    } catch (err) {
        console.log('Error: ', err);
        throw error(err.status, err.message);
    }
};

export const actions = {
    updateEducation: async ({ request, locals, params }) => {
        const formData = await request.formData();

        formData.append('userId', locals.user.id);

        try {
            await locals.pb.collection('education').update(params.educationId, formData);
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }

        throw redirect(303, `/my/education`);
    }
};