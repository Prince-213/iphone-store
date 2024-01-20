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
    const { url, fetch } = requestEvent;
    const limit = Number(url.searchParams.get("limit")) || 12;
    const skip = Number(url.searchParams.get("skip")) || 0;

    //const res = await fetch(`http://localhost:4000/iphones`);
//
    //const data: iphones = await res.json();
//
    //const slicedData = data.slice(skip, limit+skip);

    
    let { data, error } = await supabase
    .from('products')
    .select('*')
    .range(skip, limit+skip)
        

    //console.log(limit, skip)

    return json(data);
};
