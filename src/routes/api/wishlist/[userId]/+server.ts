import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { supabase } from "$lib/supabaseClient";

type iphones = {
  id: number;
  category: string;
  category_id: number;
  name: string;
  price: number;
  favorite: boolean;
}[];

export const GET: RequestHandler = async (requestEvent) => {
  const { url, fetch, params } = requestEvent;

  const { userId } = params;

  //const res = await fetch("http://localhost:4000/iphones")
  //const data = await res.json()
  //
  //const phone = data.find((item: any) => item.id === parseInt(phoneId))

  let { data, error } = await supabase
    .from("favourites")
    .select("*")

    // Filters
    .eq("user_id", userId);

  let productIds = [];
  let wishitems: any = [];

  if (data != null) {
    console.log(data);
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      //productIds.push(data[index]['product_id'])

      let product = (
        await supabase
          .from("products")
          .select("*")

          // Filters
          .eq("product_id", data[index]["product_id"])
      ).data;

      if (product != null) {
        wishitems.push({
          id: product[0].product_id,
          name: product[0].product_name,
          price: product[0].price,
          image: product[0].image,
          action: false
        });
      }
    }
   
    return json(wishitems);
  }

  return json([]);
};
