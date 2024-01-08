<script lang="ts">
	import Image from './../../../node_modules/lucide-svelte/dist/icons/image.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	import iphone from '$lib/assets/iphones/14promax/iphone-14-promax.png';

	import { MinusIcon, PlusIcon, XIcon } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	type cart = {
		id: number;
		name: string;
		image: string;
		quantity: number;
		price: number;
	}[];

	let cart = [
		{
			id: 23455555599,
			name: 'Apple IPhone 14 Pro Max 128Gb Deep Purple',
			image: iphone,
			quantity: 1,
			price: 837
		},
		{
			id: 1345599599,
			name: 'Apple IPhone 14 Pro Max 128Gb Deep Purple',
			image: iphone,
			quantity: 1,
			price: 937
		}
	];

	let totalCart: number[];
	$: totalCart = [];

	let subtotal: number;

	const initialSub = () => {};

	onMount(async () => {
		for (let index = 0; index < cart.length; index++) {
			totalCart.push(cart[index]['price']);
		}
		subtotal = totalCart.reduce((ac, cu) => ac + cu, 0);
	});

	const removeSubTotal = (price: number) => {
		subtotal -= price;
	};

	const addSubTotal = (price: number) => {
		subtotal += price;
	};

	let tooLow = false;
</script>

<div class=" w-full min-h-screen font-inter">
	<div class=" w-full py-[5vh] lg:py-[10vh]">
		<div class=" lg:w-[80%] space-y-2 mx-auto bg-white px-8">
			<h1 class=" font-semibold text-2xl">Favourite Items</h1>

			<div class=" flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:justify-between lg:items-start">
				<div class=" grid lg:gap-x-20 lg:grid-cols-2">
					{#each cart as item, idx}
						<div
							
							class={` w-full flex space-x-4 items-center border-gray-200 border-b-2 py-10 `}
						>
							<div class=" w-[20%]">
								<img src={item.image} alt="" />
							</div>
							<div class=" ">
								<h3 class=" text-base font-medium">{item.name}</h3>
								<p class=" text-sm text-gray-600">#{item.id}</p>
								<div class=" mt-2 flex justify-between items-center">
									
									<h1 class=" font-medium text-xl">
										${item.quantity * item.price}
									</h1>
									<button><XIcon class=" w-5 text-gray-500" /></button>
								</div>
							</div>
						</div>
					{/each}
				</div>

				
			</div>
		</div>
	</div>
</div>
