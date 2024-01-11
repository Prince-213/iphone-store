<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import iphone from '$lib/assets/iphones/14promax/iphone-14-promax.png';

	import { reveal } from 'svelte-reveal';

	import { navigating } from '$app/stores';

	import Loader from '../../components/Loader.svelte';

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
</script>

{#if $navigating}
	<div use:reveal={{ transition: 'fade' }}>
		<Loader />
	</div>
{:else}
	<div use:reveal={{ transition: 'fade', opacity: 1 }}  class=" w-full min-h-screen">
		<div class=" lg:w-[80%] flex flex-col lg:flex-row mx-auto py-[10vh]">
			<div class=" py-14 px-4 border-2 rounded-md space-y-4 lg:w-[45%]">
				<h1 class=" text-xl font-semibold">Summary</h1>
				<div>
					<div class=" space-y-4">
						{#each cart as item, idx}
							<div class=" w-full bg-slate-100 flex space-x-4 items-center p-4 rounded-md">
								<div class=" w-10">
									<img src={item.image} alt="" />
								</div>
								<div class=" flex items-center justify-between w-full">
									<h3 class=" text-sm font-medium">{item.name}</h3>

									<h1 class=" font-medium text-base">
										${item.quantity * item.price}
									</h1>
								</div>
							</div>
						{/each}
					</div>
				</div>
				<div class=" flex justify-between items-center">
					<h1 class=" text-base font-semibold">Subtotal</h1>
					<h1 class=" text-base font-semibold">$1233</h1>
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
					<h1 class=" text-base font-semibold">${4444 + 100}</h1>
				</div>
				<br />
				<button class=" w-full py-4 bg-black-100 rounded-md text-white font-medium">
					Checkout
				</button>
			</div>
		</div>
	</div>
{/if}
