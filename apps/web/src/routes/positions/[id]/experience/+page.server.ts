import { error, redirect } from '@sveltejs/kit';

export const load = async ({ locals, params }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login');
    }

    try {
        const position = await locals.pb.collection('jobs').getOne(params.id);
        const experiences = await locals.pb.collection('experiences').getList(1, 50, {
            filter: `jobId = "${params.id}"`,
            sort: '-startDate'
        });

        return {
            position,
            experiences: experiences.items
        };
    } catch (err) {
        console.log('Error: ', err);
        throw error(err.status, err.message);
    }
};

export const actions = {
    deleteExperience: async ({ request, locals }) => {
        const formData = await request.formData();
        const id = formData.get('id');

        try {
            await locals.pb.collection('experiences').delete(id);
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }

        return {
            success: true
        };
    }
};