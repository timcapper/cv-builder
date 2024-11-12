import { error, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export const load = async ({ locals, params }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login');
    }

    try {
        const jobApplication = serializeNonPOJOs(
            await locals.pb.collection('jobApplications').getOne(params.id)
        );

        // Verify the user owns this job application
        if (jobApplication.userId !== locals.user.id) {
            throw error(403, 'Unauthorized');
        }

        return {
            jobApplication
        };
    } catch (err) {
        console.log('Error: ', err);
        throw error(err.status, err.message);
    }
};