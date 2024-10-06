import { error } from '@sveltejs/kit';

export const load = ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login')
    }
}

export const actions = {
    updateProfile: async ({ request, locals }) => {
        let data = await request.formData();

        try {
            const { firstName, lastName } = await locals.pb.collection('users').update(locals?.user?.id, data);

            locals.user.firstName = firstName;
            locals.user.lastName = lastName;
        } catch (err) {
            console.log('Error: ', err);

            throw error(400, 'Something went wrong updating your profile.');
        }

        return {
            success: true
        };
    }
};