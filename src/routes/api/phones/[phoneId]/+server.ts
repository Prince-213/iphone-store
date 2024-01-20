import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { supabase } from "$lib/supabaseClient";

type iphones = {
    id: number,
    category: string,
    category_id: number,
    name: string,
    price: number,
    favorite: boolean,
}[]

export const GET: RequestHandler = async (requestEvent) => {
    const { url, fetch, params } = requestEvent;
    
    const { phoneId } = params

    //const res = await fetch("http://localhost:4000/iphones")
    //const data = await res.json()
//
    //const phone = data.find((item: any) => item.id === parseInt(phoneId))
    
    
    let { data, error } = await supabase
    .from('products')
    .select("*")
    
    // Filters
    .eq('product_id', phoneId)


    if ( data != null ) {
       
        return json(data[0]);
    }

    return json([])
};
