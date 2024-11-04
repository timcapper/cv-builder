import { newLanguageSchema } from '$lib/schemas';
import { validateData } from '$lib/utils';
import { error, fail, redirect } from '@sveltejs/kit';

export const load = ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login')
    }
};

export const actions = {
    newLanguage: async ({ locals, request }) => {
        const { formData, errors } = await validateData(await request.formData(), newLanguageSchema);

        if (errors) {
            return fail(400, {
                data: formData,
                errors: errors.fieldErrors
            });
        }

        try {
            await locals.pb.collection('languages').create({ ...formData, userId: locals.user.id });
        } catch (err) {
            console.log('Error: ', err)
            throw error(500, 'Something went wrong!');
        }

        throw redirect(303, '/languages');
    }
};