import type { PageServerLoad } from './$types';
import { fail, redirect } from "@sveltejs/kit";
import { env } from '$env/dynamic/private'



import { goto } from '$app/navigation';


export const load = (async ({ cookies, url }) => {


    if (!cookies.get("status")) {
        throw redirect(307, `/login?redirectTo=${url.pathname}`)
    }
    return {};
}) satisfies PageServerLoad;

// export const actions = {
//     logout: async ({ request, cookies, url }) => {
// 
//         
//         cookies.set("status", "", {
//             httpOnly: true,
//             path: '/',
//             maxAge: 0
//         })
// 
//         
//     },
// };
