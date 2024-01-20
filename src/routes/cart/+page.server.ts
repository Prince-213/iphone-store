import type { PageServerLoad } from './$types';
import { fail, redirect } from "@sveltejs/kit";
import { env } from '$env/dynamic/private'



import { goto } from '$app/navigation';

type cart = {
    id: string;
    name: string;
    image: string;
    quantity: number;
    price: number;
    action: boolean
}[];


export const load = (async ({ cookies, url, fetch }) => {


    if (!cookies.get("token")) {
        throw redirect(307, `/login?redirectTo=${url.pathname}`)
    }

    let userId = cookies.get("userId");

    const res = await fetch(`/api/cart/${userId}`)
    const data: cart = await res.json();


    return {
        cart: data,
        userId: userId
    };
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
