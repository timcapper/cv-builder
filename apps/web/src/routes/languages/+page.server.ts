import { serializeNonPOJOs } from '$lib/utils';
import { error, redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login');
    }

    const getUsersLanguages = async (userId) => {
        try {
            const languages = serializeNonPOJOs(
                await locals.pb.collection('languages').getFullList(
                    undefined,
                    {
                        filter: `userId = "${userId}"`,
                        expand: 'certificates' // This will expand the certificates relation
                    }
                )
            );
            return languages;
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }
    };

    return {
        languages: await getUsersLanguages(locals.user.id)
    };
};

export const actions = {
    deleteLanguage: async ({ request, locals }) => {
        const { id } = Object.fromEntries(await request.formData());

        try {
            await locals.pb.collection('languages').delete(id);
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }

        return {
            success: true
        };
    }
};