import { error, fail, redirect } from '@sveltejs/kit';
import { validateData } from '$lib/utils';
import { newExperienceSchema } from '$lib/schemas';

export const load = async ({ locals, params }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login');
    }

    try {
        const experience = await locals.pb.collection('jobs').getOne(params.id);
        return {
            experience
        };
    } catch (err) {
        console.log('Error: ', err);
        throw error(err.status, err.message);
    }
};

export const actions = {
    updateExperience: async ({ request, locals, params }) => {
        const { formData, errors } = await validateData(await request.formData(), newExperienceSchema);

        if (errors) {
            return fail(400, {
                data: formData,
                errors: errors.fieldErrors
            });
        }

        try {
            await locals.pb.collection('jobs').update(params.id, formData);
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }

        throw redirect(303, '/experience');
    }
};