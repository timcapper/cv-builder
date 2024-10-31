import { error, fail, redirect } from '@sveltejs/kit';
import { validateData } from '$lib/utils';
import { newEducationSchema } from '$lib/schemas';

export const load = async ({ locals, params }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login');
    }

    try {
        const education = await locals.pb.collection('education').getOne(params.id);
        return {
            education
        };
    } catch (err) {
        console.log('Error: ', err);
        throw error(err.status, err.message);
    }
};

export const actions = {
    updateEducation: async ({ request, locals, params }) => {
        const { formData, errors } = await validateData(await request.formData(), newEducationSchema);

        if (errors) {
            return fail(400, {
                data: formData,
                errors: errors.fieldErrors
            });
        }

        try {
            await locals.pb.collection('education').update(params.id, formData);
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }

        throw redirect(303, '/education');
    }
};