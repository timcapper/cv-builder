import { redirect } from '@sveltejs/kit'

export const load = ({ locals, url }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login');
    }
    if (url.pathname === '/my/settings') {
        throw redirect(303, '/my/settings/profile');
    }
};
