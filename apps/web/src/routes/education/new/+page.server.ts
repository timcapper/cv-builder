import { error, fail, redirect } from "@sveltejs/kit";
import { addEducationSchema } from "$lib/schemas.js";
import { validateData } from '$lib/utils';


export const load = ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login')
    }
}

export const actions = {
    create: async ({ request, locals }) => {
        const { formData, errors } = await validateData(await request.formData(), addEducationSchema);

        if (errors) {
            return fail(400, {
                data: formData,
                errors: errors.fieldErrors
            });
        }

        formData.append('userId', locals.user.id);

        try {
            await locals.pb.collection('education').create(formData);
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }

        throw redirect(303, '/my/education');
    }
};