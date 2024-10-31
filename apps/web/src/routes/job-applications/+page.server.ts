import { serializeNonPOJOs } from '$lib/utils';
import { error, redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login');
    }

    const getUsersJobApplications = async (userId) => {
        try {
            const jobApplications = serializeNonPOJOs(
                await locals.pb.collection('jobDescription').getFullList(
                    undefined,
                    {filter: `userId = "${userId}"`}
                )
            );
            return jobApplications;
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }
    };

    return {
        jobApplications: await getUsersJobApplications(locals.user.id)
    };
};

export const actions = {
    deleteApplication: async ({ request, locals }) => {
        const { id } = Object.fromEntries(await request.formData());

        try {
            await locals.pb.collection('jobDescription').delete(id);
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }

        return {
            success: true
        };
    }
};