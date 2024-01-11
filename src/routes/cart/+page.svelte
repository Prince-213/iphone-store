<script lang="ts">
	import Image from './../../../node_modules/lucide-svelte/dist/icons/image.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	import iphone from '$lib/assets/iphones/14promax/iphone-14-promax.png';
	import ip11pro from '$lib/assets/iphones/iphone11pro/iphone-11-promax.png';
	import ip12 from '$lib/assets/iphones/iphone12/Apple-iPhone-12-PNG-Download-Image.png';

	import { reveal } from 'svelte-reveal';

	import { navigating } from '$app/stores';

	import Loader from '../../components/Loader.svelte';

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
			name: 'Apple IPhone 11 Pro Max 128Gb Space Blue',
			image: ip11pro,
			quantity: 1,
			price: 837
		},
		{
			id: 1345599599,
			name: 'Apple IPhone 14 Pro Max 256Gb Golden',
			image: iphone,
			quantity: 1,
			price: 937
		},
		{
			id: 1745589599,
			name: 'Apple IPhone 12 1Tb Gloss Red',
			image: ip12,
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

{#if $navigating}
	<div use:reveal={{ transition: 'fade' }}>
		<Loader />
	</div>
{:else}
	<div use:reveal={{ transition: 'fade', opacity: 1 }}  class=" w-full min-h-screen font-inter">
		<div class=" w-full py-[5vh] lg:py-[10vh]">
			<div class=" lg:w-[80%] space-y-2 mx-auto bg-white px-8">
				<h1 class=" font-semibold text-2xl">Shopping Cart</h1>

				<div
					class=" flex flex-col overflow-x-hidden space-y-2 lg:flex-row lg:space-y-0 lg:justify-between lg:items-start"
				>
					<div class=" lg:w-[52%] overflow-x-hidden ">
						{#each cart as item, idx}
							<div
								style={` border-bottom-width: ${idx + 1 == cart.length ? '0px;' : '2px;'}`}
								class={` w-full flex space-x-4 overflow-x-hidden  items-center border-gray-200 border-b-2 py-10 `}
							>
								
							<img class=" min-w-[100px] max-w-[120px]"  src={item.image} alt="" />
								
								<div class=" lg:flex lg:justify-between   ">
									<div class=" lg:w-[50%]">
										<h3 class=" text-base lg:text-[17px] leading-[30px] font-medium">{item.name}</h3>
										<div class=" h-2"></div>
										<p class=" text-sm lg:text-base text-gray-800">#{item.id}</p>
									</div>
									
									<div class=" mt-2 lg:mt-0 flex justify-between lg:space-x-6  items-center">
										<div class=" flex items-center space-x-6 lg:space-x-4">
											{#if item.quantity < 2}
												<button
													disabled={true}
													on:click={() => {
														item.quantity--;
														removeSubTotal(item.price);
													}}><MinusIcon class=" w-4" /></button
												>
											{:else}
												<button
													on:click={() => {
														item.quantity--;
														removeSubTotal(item.price);
													}}><MinusIcon class=" w-4" /></button
												>
											{/if}

											<input
												value={item.quantity}
												type="text"
												class=" w-14 h-10 lg:w-12 font-medium rounded-[4px] p-2 border-gray-200 border-2 text-center"
											/>
											<button
												on:click={() => {
													item.quantity++;
													addSubTotal(item.price);
												}}><PlusIcon class=" w-4" /></button
											>
										</div>

										<h1 class=" font-medium text-xl">
											${item.quantity * item.price}
										</h1>

										<button><XIcon class=" w-5 text-gray-500" /></button>
									</div>
								</div>
							</div>
						{/each}
					</div>

					<div class=" lg:py-[56px] lg:px-[64px] px-[20px] py-[56px] border-2 rounded-md space-y-4 lg:w-[45%]">
						<h1 class=" text-xl font-semibold">Order Summary</h1>
						<div class=" flex justify-between items-center">
							<h1 class=" text-base font-semibold">Subtotal</h1>
							<h1 class=" text-base font-semibold">${subtotal}</h1>
						</div>
						<div class=" flex justify-between items-center">
							<h1 class=" text-base text-gray-500">Estimated Tax</h1>
							<h1 class=" text-base font-semibold">$50</h1>
						</div>
						<div class=" flex justify-between items-center">
							<h1 class=" text-base text-gray-500">Estimated Shipping & Handling</h1>
							<h1 class=" text-base font-semibold">$50</h1>
						</div>
						<div class=" flex justify-between items-center">
							<h1 class=" text-base font-semibold">Total</h1>
							<h1 class=" text-base font-semibold">${subtotal + 100}</h1>
						</div>
						<br />
						<button
							on:click={() => goto('/payment')}
							class=" w-full py-4 bg-black-100 rounded-md text-white font-medium"
						>
							Checkout
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
