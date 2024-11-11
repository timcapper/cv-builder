import { newExperienceSchema } from '$lib/schemas';
import { validateData } from '$lib/utils';
import { error, fail, redirect } from '@sveltejs/kit';

export const load = async ({ locals, params }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login');
    }

    try {
        const position = await locals.pb.collection('jobs').getOne(params.id);
        return {
            position,
            positionId: params.id
        };
    } catch (err) {
        console.log('Error: ', err);
        throw error(err.status, err.message);
    }
};

export const actions = {
    newExperience: async ({ request, locals, params }) => {
        const { formData, errors } = await validateData(await request.formData(), newExperienceSchema);

        if (errors) {
            return fail(400, {
                data: formData,
                errors: errors.fieldErrors
            });
        }

        try {
            await locals.pb.collection('experiences').create({
                userId: locals.user.id,
                jobId: params.id,
                ...formData
            });
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }

        throw redirect(303, `/positions/`);
    }
};

