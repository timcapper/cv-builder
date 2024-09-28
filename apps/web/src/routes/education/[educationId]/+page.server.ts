import { serializeNonPOJOs } from '$lib/utils';
import { error } from '@sveltejs/kit';


export const load = async ({ locals, params }) => {
    const getEducation = async (educationId) => {
        try {
            const education = serializeNonPOJOs(await locals.pb.collection('education').getOne(educationId));
            return education;
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }
    };

    return {
        education: await getEducation(params.educationId)
    };
};