import { supabase } from '$lib/supabaseClient';
import type { LayoutServerLoad } from './$types';

let auth = false;

let userName: any;
let userEmail: any;
let userAvatar: any;

export const load = (async ( { cookies, url } ) => {

    let favourite: any[] | null = [];
    let cart: any[] | null = [];

    if (!cookies.get("token")) {
        auth = false;
        console.log(auth);
    } else {
        auth = true;
        userName = cookies.get("userName");
        userEmail = cookies.get("userEmail");
        userAvatar = cookies.get('userAvatar');
        console.log(userEmail);

        
        favourite = (await supabase
            .from('favourites')
            .select('*')).data;
        
        cart = (await supabase
            .from('carts')
            .select('*')).data;
        
    }



    console.log('auth is' + auth);


    return {
        data: auth,
        name: userName,
        email: userEmail,
        avatar: userAvatar,
        favourite: favourite?.length,
        cart: cart?.length
    };
}) satisfies LayoutServerLoad;

