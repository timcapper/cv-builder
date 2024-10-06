import { registerUserSchema } from '$lib/schemas';
import { validateData } from '$lib/utils';
import { error, fail, redirect } from '@sveltejs/kit';

export const actions = {
    register: async ({ locals, request }) => {
        const { formData, errors } = await validateData(await request.formData(), registerUserSchema);

        if (errors) {
            return fail(400, {
                data: formData,
                errors: errors.fieldErrors
            });
        }

        try {
            await locals.pb.collection('users').create({ ...formData });
            await locals.pb.collection('users').requestVerification(formData.email);
        } catch (err) {
            console.log('Error: ', err)
            throw error(500, 'Something went wrong!');
        }

        throw redirect(303, '/login');
    }
};