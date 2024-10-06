import { error, fail, redirect } from '@sveltejs/kit';
import { validateData } from '$lib/utils.js';
import { loginUserSchema } from '$lib/schemas.js';

export const actions = {
    login: async ({ request, locals }) => {
        const { formData, errors } = await validateData(await request.formData(), loginUserSchema);

        if (errors) {
            return fail(400, {
                data: formData,
                errors: errors.fieldErrors
            });
        }

        try {
            await locals.pb.collection('users').authWithPassword(formData.email, formData.password);
            if (!locals.pb.authStore?.model?.verified) {
                locals.pb.authStore.clear();
                return {
                    notVerified: true
                };
            }
        } catch (err) {
            console.log('Error', err);
            throw error(500, 'Something went wrong logging in');
        }

        throw redirect(303, '/');
    }
};