import { error, fail, redirect } from '@sveltejs/kit';
import { validateData } from '$lib/utils';
import { newLanguageSchema } from '$lib/schemas';

export const load = async ({ locals, params }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login');
    }

    try {
        const language = await locals.pb.collection('languages').getOne(params.id);
        return {
            language
        };
    } catch (err) {
        console.log('Error: ', err);
        throw error(err.status, err.message);
    }
};

export const actions = {
    updateLanguage: async ({ request, locals, params }) => {
        const { formData, errors } = await validateData(await request.formData(), newLanguageSchema);

        if (errors) {
            return fail(400, {
                data: formData,
                errors: errors.fieldErrors
            });
        }

        try {
            await locals.pb.collection('languages').update(params.id, formData);
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }

        throw redirect(303, '/languages');
    }
};