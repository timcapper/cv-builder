import { error } from '@sveltejs/kit'


export const actions = {
    uploadJobDescription: async ({ request, locals }) => {
        let data = await request.formData();

        try {
            await locals.pb.collection('jobDescription').update(locals.)
        } catch (err) {
            console.log('Error: ', err);

            throw error(400, 'Something went wrong.');
        }
    }
};