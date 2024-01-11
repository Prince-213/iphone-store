import { fail, redirect } from "@sveltejs/kit";
import { env } from '$env/dynamic/private'
import { supabase } from "$lib/supabaseClient";



export const actions = {
    login: async ({ request, cookies, url }) => {
        const data = await request.formData();

        const email = data.get("email")
        const pass = data.get("password")

        console.log(data)

        try {
            
            const { data, error } = await supabase.auth.signInWithPassword({
                email: `${email}`,
                password: `${pass}`,
            })

            if (error) {
                return fail(404, { message: "Access Denied", error: true })
            } else {
                console.log(data)

                cookies.set("token", `${data.session.access_token}`, {path: '/'})
                cookies.set("userName", `${data.user.user_metadata['full_name']}`, {path: '/'})
                cookies.set("userEmail", `${data.user.email}`, {path: '/'})
                cookies.set("userAvatar", `${data.user.user_metadata['avatar_url']}`, {path: '/'})
                
                return { message: "Access Grandted", error: false }  
            }
            
        } catch (error) {
            
        } finally {
            
        }

        

    

        
    },
};

