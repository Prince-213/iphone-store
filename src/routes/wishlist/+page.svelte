<script lang="ts">
	import Loader from './../../components/Loader.svelte';
	import Image from './../../../node_modules/lucide-svelte/dist/icons/image.svelte';
	import type { PageData } from './$types';
	import { reveal } from 'svelte-reveal';

	import iphone from '$lib/assets/iphones/14promax/iphone-14-promax.png';

	import { MinusIcon, PlusIcon, XIcon } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { goto, invalidateAll } from '$app/navigation';
	import { navigating } from '$app/stores';

	import { slide } from 'svelte/transition';

	import trash from '$lib/assets/lottie/icons8-delete.gif';
	import { supabase } from '$lib/supabaseClient';

	import spin from '$lib/assets/images/Iphone-spinner-2.gif';

	export let data;

	$: wishlist = data.wishlist;
	let userId = data.userid;

	console.log(wishlist);

	let deleting = true;

	const removeWish = async (productId: string) => {
		deleting = true;
		wishlist = wishlist.map((iphone: any) => {
			if (iphone.id == productId) {
				return { ...iphone, action: true };
			}
			return iphone;
		});
		try {
			const { error } = await supabase
				.from('favourites')
				.delete()
				.eq('favourite_id', `${productId}${userId}`);
			deleting = false;
			//wishlist = wishlist.map((iphone: any) => {
			//	if (iphone.id == productId) {
			//		return { ...iphone, action: false };
			//	}
			//	return iphone;
			//});
			invalidateAll();
		} catch (error) {}
	};
</script>

{#if $navigating}
	<div use:reveal={{ transition: 'fade', threshold: 0.1 }}>
		<Loader />
	</div>
{:else}
	<div use:reveal={{ transition: 'fade', opacity: 1 }} class=" w-full min-h-screen font-inter">
		<div class=" w-full py-[5vh] lg:py-[10vh]">
			<div class=" lg:w-[80%] space-y-2 mx-auto bg-white px-8">
				<h1 class=" font-semibold text-2xl">Favourite Items</h1>

				<div
					class=" flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:justify-between lg:items-start"
				>
					<div class=" grid lg:gap-x-20 lg:grid-cols-2">
						{#each wishlist as item, idx}
							<div
								transition:slide
								class={` w-full flex space-x-4 items-center border-gray-200 border-b-2 py-10 `}
							>
								<div class=" w-[20%]">
									<img src={item.image} alt="" />
								</div>
								<div class=" w-full">
									<h3 class=" text-base font-medium">{item.name}</h3>

									<div class="  w-full mt-2 flex justify-between items-center">
										<h1 class=" font-medium text-xl">
											₦{Intl.NumberFormat().format(item.price)}
										</h1>

										{#if !item.action}
											<button on:click={() => removeWish(item.id)}
												><img width="30px" src={trash} alt="" /></button
											>
										{:else}
											
											<img src={spin} width="20px" alt="" />
										{/if}
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
