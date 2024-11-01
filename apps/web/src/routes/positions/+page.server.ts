import { serializeNonPOJOs } from '$lib/utils';
import { error, redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login');
    }

    const getUsersPositions = async (userId) => {
        try {
            const positions = serializeNonPOJOs(
                await locals.pb.collection('jobs').getFullList(
                    undefined,
                    {filter: `userId = "${userId}"`}
                )
            );
            return positions;
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }
    };

    return {
        positions: await getUsersPositions(locals.user.id)
    };
};

export const actions = {
    deletePosition: async ({ request, locals }) => {
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