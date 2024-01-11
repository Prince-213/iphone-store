import type { LayoutServerLoad } from './$types';

let auth = false;

let userName: any;
let userEmail: any;
let userAvatar: any;

export const load = (async ( { cookies, url } ) => {


    if (!cookies.get("token")) {
        auth = false;
        console.log(auth);
    } else {
        auth = true;
        userName = cookies.get("userName");
        userEmail = cookies.get("userEmail");
        userAvatar = cookies.get('userAvatar');
        console.log(userEmail);
    }



    console.log('auth is' + auth);


    return {
        data: auth,
        name: userName,
        email: userEmail,
        avatar: userAvatar
    };
}) satisfies LayoutServerLoad;

