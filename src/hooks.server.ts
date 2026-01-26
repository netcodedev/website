import { CAuth } from '$lib/server/cauth';
import { redirect, type Handle } from '@sveltejs/kit';
import { PUBLIC_CAUTH_URL, PUBLIC_PLATFORM_NAME } from '$env/static/public';

export const handle: Handle = async ({ event, resolve }) => {
	let session = event.cookies.get('session');
	if (session) {
		const success = await CAuth.verifyLogin(session);
		if (!success) {
			event.cookies.delete('session', { path: '/' });
			redirect(302, `${PUBLIC_CAUTH_URL}/login?ref=${PUBLIC_PLATFORM_NAME}`);
		}
		const user = await CAuth.getUserData(session);
		if (!user || user.name !== 'netcode') {
			event.cookies.delete('session', { path: '/' });
			redirect(302, `/`);
		}
	} else if (event.url.pathname.startsWith('/admin') && !event.url.searchParams.get('session')) {
		redirect(302, `${PUBLIC_CAUTH_URL}/login?ref=${PUBLIC_PLATFORM_NAME}`);
	}
	return await resolve(event);
};
