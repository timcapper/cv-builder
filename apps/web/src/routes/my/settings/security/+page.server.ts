import { updatePasswordSchema } from "$lib/schemas"
import { validateData } from "$lib/utils"
import { error, fail, redirect } from "@sveltejs/kit"

export const load = ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login')
    }
}

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
        } catch {
            console.log('Error: ', err)
            throw error(err.status, err.message)
        }

        throw redirect(303, '/login')
    }
}