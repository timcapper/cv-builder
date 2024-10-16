import { redirect } from '@sveltejs/kit'

export const load = ({ locals, url }) => {
    console.log('Loading /my/settings:', url.pathname);
    if (!locals.pb.authStore.isValid) {
        console.log('User not authenticated, redirecting to /login');
        throw redirect(303, '/login');
    }
    if (url.pathname === '/my/settings') {
        console.log('Redirecting to /my/settings/profile');
        throw redirect(303, '/my/settings/profile');
    }
};
