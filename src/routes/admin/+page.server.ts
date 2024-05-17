import { CAuth } from '$lib/server/cauth';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { rootDB } from '$lib/server/db';

type Message = {
    id: string;
    name: string;
    email: string;
    message: string;
    createdAt: string;
};

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
    const [messages] = await _db.query('SELECT * FROM message ORDER BY createdAt DESC') as Message[][];
    return {
        messages
    }
};