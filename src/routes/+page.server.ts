import { redirect, type Actions } from '@sveltejs/kit';
import { rootDB } from '$lib/server/db';

export const actions: Actions = {
	sendMessage: async ({ request }) => {
		const data = Object.fromEntries(await request.formData());
		const _db = await rootDB();
		await _db.create('message', data);
		redirect(302, '/');
	}
};
