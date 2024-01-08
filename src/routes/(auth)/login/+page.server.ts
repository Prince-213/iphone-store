import { fail, redirect } from "@sveltejs/kit";
import { env } from '$env/dynamic/private'




export const actions = {
    login: async ({ request, cookies, url }) => {
        const data = await request.formData();

        const email = data.get("email")
        const pass = data.get("password")

        console.log(data)

        try {
            if (email == 'dog@gmail.com' && pass == '123') {
                cookies.set("status", 'admin', {path: '/'})
            
                return { message: "Access Grandted", error: false }
                
                
            }else {
                cookies.delete("status")
                return fail(404, { message: "Access Denied", error: true })
            }
        } catch (error) {
            
        } finally {
            
        }

        

    

        
    },
};
