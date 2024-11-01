import { error, fail, redirect } from '@sveltejs/kit';
import { validateData } from '$lib/utils';
import { newPositionSchema } from '$lib/schemas';

export const load = async ({ locals, params }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login');
    }

    try {
        const position = await locals.pb.collection('jobs').getOne(params.id);
        return {
            position
        };
    } catch (err) {
        console.log('Error: ', err);
        throw error(err.status, err.message);
    }
};

export const actions = {
    updatePosition: async ({ request, locals, params }) => {
        const { formData, errors } = await validateData(await request.formData(), newPositionSchema);

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

        throw redirect(303, '/positions');
    }
};