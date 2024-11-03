import { error, fail, redirect } from '@sveltejs/kit';
import { validateData } from '$lib/utils';
import { newCertificateSchema } from '$lib/schemas';

export const load = async ({ locals, params }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login');
    }

    try {
        const certificate = await locals.pb.collection('certificatesLicenses').getOne(params.id);
        return {
            certificate
        };
    } catch (err) {
        console.log('Error: ', err);
        throw error(err.status, err.message);
    }
};

export const actions = {
    updateCertificate: async ({ request, locals, params }) => {
        const { formData, errors } = await validateData(await request.formData(), newCertificateSchema);

        if (errors) {
            return fail(400, {
                data: formData,
                errors: errors.fieldErrors
            });
        }

        try {
            await locals.pb.collection('certificatesLicenses').update(params.id, formData);
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }

        throw redirect(303, '/certificates');
    }
};