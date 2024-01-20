import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabaseClient';


type iphones = {
    id: number,
    category: string,
    category_id: number,
    name: string,
    price: number,
    favorite: boolean,
}[]

type iphonesImg = {
    id: number,
    category: string,
    images: string[],
}[]

export const load = (async ( { fetch, url, cookies } ) => {
    const limit = Number(url.searchParams.get('limit')) || 12;
    const skip = Number(url.searchParams.get('skip')) || 0;

    async function getIphones(limit: number = 12, skip: number = 0) {
        if (limit > 100) {
            throw error(400, 'Bad request');
        }

        const res = await fetch(`/api/phones?limit=${limit}&skip=${skip}`);
        const data = await res.json();
        return data;
    }

    //const res = await fetch('http://localhost:4000/iphones');
    const iphone = (await supabase
        .from('products')
        .select('*')).data;

    let userId = cookies.get("userId");
    const res = await fetch(`/api/wishlist/${userId}`)
    const data = await res.json();
    
    let idArray = data.map((item: any) => item.id);



    

    return {
        total: iphone?.length ?? 0,
        wishlist: idArray, 
        phones: getIphones(limit, skip),
        skip: skip
    };

}) satisfies PageServerLoad;