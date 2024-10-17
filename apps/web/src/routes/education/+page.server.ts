import { serializeNonPOJOs } from '$lib/utils';
import { error, redirect } from '@sveltejs/kit';


export const load = async ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login');
    }

    const getUsersEducation = async (userId) => {
        try {
            const education = serializeNonPOJOs(
                await locals.pb.collection('education').getFullList(
                    undefined,
                    {filter: `userId = "${userId}"`}
                )
            );
            return education;
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }
    };

    return {
        education: await getUsersEducation(locals.user.id)
    };
};

export const actions = {
    deleteEducation: async ({ request, locals }) => {
        console.log('hello');
        const { id } = Object.fromEntries(await request.formData());

        try {
            await locals.pb.collection('education').delete(id);
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }

        return {
            success: true
        };
    }
};