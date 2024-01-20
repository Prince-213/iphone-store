<script lang="ts">
	import Image from './../../../node_modules/lucide-svelte/dist/icons/image.svelte';
	import type { PageData } from './$types';

	export let data;

	import iphone from '$lib/assets/iphones/14promax/Iphone 14 pro 3.png';
	import ip11pro from '$lib/assets/iphones/iphone11pro/iphone-11-promax.png';
	import ip13 from '$lib/assets/iphones/iphone13pro/Pink-iPhone-13-PNG-HD-Image.png';

	import { reveal } from 'svelte-reveal';

	import { navigating } from '$app/stores';

	import trash from '$lib/assets/lottie/icons8-delete.gif';

	import spin from '$lib/assets/images/Iphone-spinner-2.gif';

	import Loader from '../../components/Loader.svelte';

	import { MinusIcon, PlusIcon, XIcon } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { goto, invalidateAll } from '$app/navigation';
	import { supabase } from '$lib/supabaseClient';
	import { checkOutCart } from '$lib/data/store'

	
	
	let cart = data.cart;

	$: cart = data.cart;

	let userId = data.userId;

	let cartCopy = [...cart]

	let totalCart: number[];
	$: totalCart = [];

	let subtotal: number;

	const initialSub = () => {};

	onMount(async () => {
		for (let index = 0; index < cart.length; index++) {
			totalCart.push(cart[index]['price']);
		}
		subtotal = totalCart.reduce((ac, cu) => ac + cu, 0);

		console.log(cartCopy)
	});

	const removeSubTotal = (price: number) => {
		subtotal -= price;
		console.log(cartCopy)
	};

	const addSubTotal = (price: number) => {
		subtotal += price;
		console.log(cartCopy)
	};

	let deleting = false;

	function reloadPage() {
        

		invalidateAll()

        
    }

	const removeWish = async (productId: string, price: number) => {
		
		cart = cart.map((iphone: any) => {
			if (iphone.id == productId) {
				return { ...iphone, action: true };
			}
			return iphone;
		});

		try {
			const { error } = await supabase
				.from('carts')
				.delete()
				.eq('cart_id', `${productId}${userId}`);
			
			//wishlist = wishlist.map((iphone: any) => {
			//	if (iphone.id == productId) {
			//		return { ...iphone, action: false };
			//	}
			//	return iphone;
			//});
			
			removeSubTotal(price)
		} catch (error) {

		} finally {
			reloadPage()
			
		}
	};

	const toPayment = async () => {
		$checkOutCart = [...cartCopy];
		goto('/payment')
	}

	let tooLow = false;
</script>

{#if $navigating}
	<div use:reveal={{ transition: 'fade', threshold: 0.1 }}>
		<Loader />
	</div>
{:else}
	<div use:reveal={{ transition: 'fade', opacity: 1 }} class=" w-full min-h-screen font-inter">
		<div class=" w-full py-[5vh] lg:py-[10vh]">
			<div class=" lg:w-[85%] space-y-2 mx-auto bg-white px-8">
				<h1 class=" font-semibold text-2xl">Shopping Cart</h1>

				<div
					class=" flex flex-col overflow-x-hidden space-y-2 lg:flex-row lg:space-y-0 lg:justify-between lg:items-start"
				>
					<div class=" lg:w-[55%] overflow-x-hidden">
						{#each cart as item, idx}
							<div
								style={` border-bottom-width: ${idx + 1 == cart.length ? '0px;' : '2px;'}`}
								class={` w-full flex flex-col justify-end lg:flex-row  space-x-4 lg:justify-between overflow-x-hidden  lg:items-center border-gray-200 border-b-2 py-10 `}
							>
								<div class=" flex space-x-4 items-center">
									<img
										class=" lg:min-w-[100px] object-fill lg:max-w-[120px] min-w-[80px] max-w-[100px]"
										width="100px"
										height="100px"
										src={item.image}
										alt=""
									/>
									<div class=" lg:w-[80%]">
										<h3 class=" text-base lg:text-[17px] leading-[30px] font-medium">
											{item.name}
										</h3>
										<div class=" h-2"></div>
										<p class=" text-sm lg:text-base text-gray-800">#{item.id.substring(0, 10)}</p>
									</div>
								</div>

								<div class=" lg:w-[45%] w-full flex justify-end lg:block py-2">
									<div class=" lg:flex lg:justify-between w-[70%] lg:w-[45%]">
										<div class=" mt-2 lg:mt-0 flex justify-between lg:space-x-6 items-center">
											<div class=" flex items-center space-x-3 lg:space-x-4">
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
														console.log(cartCopy);
														addSubTotal(item.price);
													}}><PlusIcon class=" w-4" /></button
												>
											</div>

											<h1 class=" font-medium text-xl">
												₦{Intl.NumberFormat().format(item.quantity * item.price)}
											</h1>

											

											{#if !item.action}
												<button class=" min-w-fit min-h-fit " on:click={() => removeWish(item.id, item.quantity * item.price)}
													><img width="24px"  src={trash} alt="" /> </button
												>
											{:else}
												<img src={spin} width="20px" alt="" />
											{/if}
										</div>
									</div>
								</div>
							</div>
						{/each}
					</div>

					<div
						class=" lg:py-[56px] lg:px-[64px] px-[20px] py-[56px] border-2 rounded-md space-y-4 lg:w-[40%]"
					>
						<h1 class=" text-xl font-semibold">Order Summary</h1>
						<div class=" flex justify-between items-center">
							<h1 class=" text-base font-semibold">Subtotal</h1>
							<h1 class=" text-base font-semibold">₦{Intl.NumberFormat().format(subtotal)}</h1>
						</div>
						<div class=" flex justify-between items-center">
							<h1 class=" text-base text-gray-500">Estimated Tax</h1>
							<h1 class=" text-base font-semibold">₦50</h1>
						</div>
						<div class=" flex justify-between items-center">
							<h1 class=" text-base text-gray-500">Estimated Shipping & Handling</h1>
							<h1 class=" text-base font-semibold">₦50</h1>
						</div>
						<div class=" flex justify-between items-center">
							<h1 class=" text-base font-semibold">Total</h1>
							<h1 class=" text-base font-semibold">
								₦{Intl.NumberFormat().format(subtotal + 100)}
							</h1>
						</div>
						<br />
						<button
							on:click={toPayment}
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
