import { updatePasswordSchema, updateEmailSchema } from "$lib/schemas"
import { validateData } from "$lib/utils"
import { error, fail, redirect } from "@sveltejs/kit"

export const load = ({ locals }) => {
    console.log('Loading /my/settings/security');
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login')
    }
};

export const actions = {
    updatePassword: async ({ request, locals }) => {
        const { formData, errors } = await validateData(await request.formData(), updatePasswordSchema)

        if (errors) {
            return fail(400, {
                errors: errors.fieldErrors
            })
        }

        try {
            await locals.pb.collection('users').update(locals.user.id, formData)
        } catch (err) {
            console.log('Error: ', err)
            throw error(err.status, err.message)
        }

        throw redirect(303, '/login')
    },

    updateEmail: async ({ request, locals }) => {
        const { formData, errors } = await validateData(await request.formData(), updateEmailSchema)

        try {
            await locals.pb.collection('users').requestEmailChange(formData.email);
        } catch (err) {
            throw error(err.status, err.message);
        }

        return {success: true};
    },

    deleteAccount: async ({ request, locals }) => {
        const formData = await request.formData();

        const password = formData.get('deleteAccountPassword');

        try {
            await locals.pb.collection('users').authWithPassword(locals.user.email, password);

            await locals.pb.collection('users').delete(locals.pb.authStore.model.id);
        } catch (err) {
            if (err.status === 400) {
                return fail(400, {
                    errors: {
                        deleteAccountPassword: 'Password is incorrect',
                    }
                });
            } else {
                console.log('Error: ', err)
                throw error(err.status, err.message)
            }
        }

        return {success: true};
    }
};