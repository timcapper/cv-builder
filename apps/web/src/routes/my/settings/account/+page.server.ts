import { updateEmailSchema } from '$lib/schemas';
import { validateData } from '$lib/utils';
import { error } from '@sveltejs/kit';

export const actions = {
    updateEmail: async ({ request, locals }) => {
        const { formData, errors } = await validateData(await request.formData(), updateEmailSchema)

        try {
            await locals.pb.collection('users').requestEmailChange(formData.email);
        } catch (err) {
            throw error(err.status, err.message);
        }

        return {success: true};
    }
};