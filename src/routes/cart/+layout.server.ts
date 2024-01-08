import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ cookies, url }) => {
    if (cookies.get("status")) {
        throw redirect(303, url.searchParams.get('redirectTo') || '/')
    }
    return {};
}) satisfies LayoutServerLoad;

