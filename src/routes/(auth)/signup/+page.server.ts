import { fail, redirect } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";
import { generateFromEmail, generateUsername } from "unique-username-generator";
import { supabase } from "$lib/supabaseClient";





export const actions = {
  register: async ({ request, cookies, url }) => {
    const data = await request.formData();
    const email = await data.get('email');
    const fullName = await data.get('full_name');
    const password = await data.get('password');
    const avatar: any = await data.get('avatar');


    console.log(data);

    const username = generateFromEmail(`${email}`, 5);

    console.log(username);

    try {
        const { data, error } = await supabase.auth.signUp({
            email: `${email}`,
            password: `${password}`,
            options: {
                data: {
                username: username,
                full_name: fullName,
                avatar_url: `${username}.jpg`
                },
            },
        });

        if (error) {
            return fail(404, {
                message: error.message,
                error: true,
            });
        } else {
            const { data, error } = await supabase.storage
                .from('avatars')
                .upload(`public/${username}.jpg`, avatar, {
                    cacheControl: "3600",
                    upsert: false,
            });
            
            if (error) {
                return { message: "Registration UnSuccessful", error: true };
            }
            return { message: "Registration Successful", error: false };
        }
        
    } catch (error) {
    } finally {
    }
},
};
