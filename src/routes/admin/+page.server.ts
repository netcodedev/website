import { CAuth } from '$lib/server/cauth';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { rootDB } from '$lib/server/db';

export const load: PageServerLoad = async ({ url, cookies }) => {
    const session = url.searchParams.get('session');
    if(session){
        const success = await CAuth.verifyLogin(session);
        if(success){
            cookies.set('session', session, { path: '/' });
            redirect(302, '/admin');
        }
    };
    const _db = await rootDB();
    const [messages] = await _db.query('SELECT * FROM message ORDER BY createdAt DESC');
    return {
        messages
    }
};