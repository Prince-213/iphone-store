import type { PageServerLoad } from './$types';

type iphone = {
    "id": number,
    "category": string,
    "category_id": number,
    "name": string,
    "price": number,
    "favorite": boolean,
    "gallery": string[],
    "old-price": number,
    "colors" : string[],
    "storage": string[],
    "specs" : [ 
        
        {
        "title": string,
        "values" : [
            {
            "title": string,
            "value": number
            },
            
        ]
        },

    ],
    "screen-size": number,
    "cpu": string,
    "cores": number,
    "main-camera": string,
    "front-camera": string,
    "battery": number,
    "resolution": number[],
    "refresh-rate": number,
    "density": number,
    "screen-type": string,
    "additional": string[]
}


export const load = (async ({ params, fetch }) => {

    const { productId } = params;

    const res = await fetch(`/api/phones/${productId}`)
    const data: iphone = await res.json();

    

    return {
        phone: data
    };
}) satisfies PageServerLoad ;