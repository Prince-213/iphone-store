import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';


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

export const load = (async ( { fetch, url } ) => {
    const limit = Number(url.searchParams.get('limit')) || 12;
    const skip = Number(url.searchParams.get('skip')) || 0;

    async function getIphones(limit: number = 12, skip: number = 0) {
        if (limit > 100) {
            throw error(400, 'Bad request');
        }

        const res = await fetch(`/api/phones?limit=${limit}&skip=${skip}`);
        const data: iphones = await res.json();
        return data;
    }

    const res = await fetch('http://localhost:4000/iphones');
    const iphone: iphones = await res.json();



    const resImg = await fetch('http://localhost:4000/iphone-images');
    const iphoneImg: iphonesImg = await resImg.json();

    return {
        total: iphone.length,
        iphoneImgs: iphoneImg,
        phones: getIphones(limit, skip),
        skip: skip
    };

}) satisfies PageServerLoad;