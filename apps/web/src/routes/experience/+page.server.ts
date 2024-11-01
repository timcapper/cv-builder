import { serializeNonPOJOs } from '$lib/utils';
import { error, redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login');
    }

    const getUsersExperience = async (userId) => {
        try {
            const experience = serializeNonPOJOs(
                await locals.pb.collection('jobs').getFullList(
                    undefined,
                    {filter: `userId = "${userId}"`}
                )
            );
            return experience;
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }
    };

    return {
        experience: await getUsersExperience(locals.user.id)
    };
};

export const actions = {
    deleteExperience: async ({ request, locals }) => {
        const { id } = Object.fromEntries(await request.formData());

        try {
            await locals.pb.collection('jobs').delete(id);
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }

        return {
            success: true
        };
    }
};