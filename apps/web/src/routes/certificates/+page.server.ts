import { serializeNonPOJOs } from '$lib/utils';
import { error, redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login');
    }

    const getUsersCertificates = async (userId) => {
        try {
            const certificates = serializeNonPOJOs(
                await locals.pb.collection('certificatesLicenses').getFullList(
                    undefined,
                    {filter: `userId = "${userId}"`}
                )
            );
            return certificates;
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }
    };

    return {
        certificates: await getUsersCertificates(locals.user.id)
    };
};

export const actions = {
    deleteCertificate: async ({ request, locals }) => {
        const { id } = Object.fromEntries(await request.formData());

        try {
            await locals.pb.collection('certificatesLicenses').delete(id);
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }

        return {
            success: true
        };
    }
};