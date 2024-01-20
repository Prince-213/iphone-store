import { supabase } from '$lib/supabaseClient';
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




export const load = (async ({ params, fetch, cookies }) => {

    const { productId } = params;

    let liked = false;
    let carted = false;

    const res = await fetch(`/api/phones/${productId}`)
    const data = await res.json();

    let userId = cookies.get('userId')

    
    let wish = (await supabase
    .from('favourites')
    .select("*")
    
    // Filters
    .eq('favourite_id', `${data.product_id}${userId}`)).data

    let cart = (await supabase
        .from('carts')
        .select("*")
        
        // Filters
        .eq('cart_id', `${data.product_id}${userId}`)).data

    if ( wish?.length != 0 ) {
        liked = true;
    }else {
        liked = false;
    }
    
    if ( cart?.length != 0 ) {
        carted = true;
    }else {
        carted = false;
    }
    
   

    return {
        phone: data,
        userId: userId,
        wished: liked,
        carted: carted
    };
}) satisfies PageServerLoad ;