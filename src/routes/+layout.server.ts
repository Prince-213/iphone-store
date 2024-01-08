import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';



export const load = (async ({ cookies, url }) => {

    let auth = true;

    if (cookies.get("status")) {
        
        throw redirect(303, url.searchParams.get('redirectTo') || '/')
    }
    return {
        auth: auth
    };
}) satisfies LayoutServerLoad;

