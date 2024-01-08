import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import iphone from '$lib/assets/iphones/14promax/iphone-14-promax.png';

export const GET: RequestHandler = async () => {
    return json([
        {
            id: 23455555599,
            name: "Apple IPhone 14 Pro Max 128Gb Deep Purple",
            image: iphone,
            quantity: 1,
            price: 837,
        },
        {
            id: 1345599599,
            name: "Apple IPhone 14 Pro Max 128Gb Deep Purple",
            image: iphone,
            quantity: 1,
            price: 937,
        },
    ]);
};


//export const POST: RequestHandler = async (requestEvent) => {
//    const { request } = requestEvent
//    const { text } = await request.json()
//    const newComment = {
//        id: comments.length + 1,
//        text
//    }
//
//    comments.push(newComment)
//    return json(newComment, { status: 200 });
//};