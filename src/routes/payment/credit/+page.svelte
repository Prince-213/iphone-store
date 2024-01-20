<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import iphone from '$lib/assets/iphones/14promax/iphone-14-promax.png';

	import { reveal } from 'svelte-reveal';

	import { navigating } from '$app/stores';

	import chip from '$lib/assets/images/chip.png';
	import opay from '$lib/assets/images/Opay.png';
    import zenith from '$lib/assets/images/gtbank-seeklogo.svg'
    import kuda from '$lib/assets/images/kuda-bank.svg'

	import Loader from '../../../components/Loader.svelte';

	import { MapPinIcon, TruckIcon, CreditCardIcon } from 'lucide-svelte';
	import { MapPinSolid, TruckSolid } from 'flowbite-svelte-icons';

	import { Tabs, TabItem } from 'flowbite-svelte';
	import { goto } from '$app/navigation';

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
	<div use:reveal={{ transition: 'fade', threshold: 0.1 }}>
		<Loader />
	</div>
{:else}
	<div
		use:reveal={{ transition: 'slide', threshold: 0.2, duration: 500 }}
		class=" w-full min-h-screen pt-[32px]"
	>
		<div class=" lg:w-[80%] flex flex-col lg:flex-row lg:justify-between mx-auto py-[10vh]">
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
                <div >
                    <h3>Address</h3>
                    <p class=" font-medium">1131 Dusty Townline, Jacksonville</p>
                </div>
                <div >
                    <h3>Shipment Method</h3>
                    <p class=" font-medium">Free</p>
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
				<button on:click={() => goto('/cart')}  class=" w-full py-4 bg-black-100 rounded-md text-white font-medium">
					Checkout
				</button>
			</div>
			<div class=" w-[90%] mx-auto lg:w-[45%]">
				<h1 class=" text-xl font-semibold">Payment</h1>
				<div class=" mt-[25px]">
					<Tabs activeClasses=" text-black-100 font-semibold" style="underline">
						<br />
						<TabItem class=" p-0 bg-white" open title="Opay">
							<div class=" w-full bg-transparent">
								<div
									class=" w-full min-h-[10em] rounded-2xl p-8 overflow-hidden relative after:absolute after:w-10 after:h-[50vh] after:-top-10 after:right-[30%] after:bg-[white] after:opacity-[0.1] after:rotate-[25deg] before:absolute before:w-10 before:h-[50vh] before:-top-10 before:right-[41%] before:bg-[white] before:opacity-[0.1] before:rotate-[25deg] bg-[#000]"
								>
									<div class=" w-full flex items-center justify-between">
										<img src={chip} width="30px" alt="" />
										<img src={opay} width="40px" alt="" />
									</div>

									<div class=" space-y-5 mt-10">
										<h1 class=" text-white font-semibold text-xl lg:text-4xl tracking-[1em]">7080918600</h1>

										<div class=" flex justify-between items-center">
											<h1 class=" text-white font-semibold text-sm lg:text-xl">Opay</h1>
											<h1 class=" text-white font-semibold text-sm lg:text-lg">DAVID GREEN</h1>
										</div>
									</div>
								</div>
							</div>
						</TabItem>
						<TabItem title="GT Bank">
							<div class=" w-full bg-transparent">
								<div
									class=" w-full min-h-[10em] rounded-2xl p-8 overflow-hidden relative after:absolute after:w-10 after:h-[50vh] after:-top-10 after:right-[30%] after:bg-[white] after:opacity-[0.1] after:rotate-[25deg] before:absolute before:w-10 before:h-[50vh] before:-top-10 before:right-[41%] before:bg-[white] before:opacity-[0.1] before:rotate-[25deg] bg-[#000]"
								>
									<div class=" w-full flex items-center justify-between">
										<img src={chip} width="30px" alt="" />
										<img src={zenith} width="40px" alt="" />
									</div>

									<div class=" space-y-5 mt-10">
										<h1 class=" text-white font-semibold text-xl lg:text-4xl tracking-[1em]">0416299482</h1>

										<div class=" flex justify-between items-center">
											<h1 class=" text-white font-semibold text-sm lg:text-xl">GT Bank</h1>
											<h1 class=" text-white font-semibold text-sm lg:text-lg">DAVID GREEN</h1>
										</div>
									</div>
								</div>
							</div>
						</TabItem>
                        <TabItem title="Kuda Bank">
							<div class=" w-full bg-transparent">
								<div
									class=" w-full min-h-[10em] rounded-2xl p-8 overflow-hidden relative after:absolute after:w-10 after:h-[50vh] after:-top-10 after:right-[30%] after:bg-[white] after:opacity-[0.1] after:rotate-[25deg] before:absolute before:w-10 before:h-[50vh] before:-top-10 before:right-[41%] before:bg-[white] before:opacity-[0.1] before:rotate-[25deg] bg-[#000]"
								>
									<div class=" w-full flex items-center justify-between">
										<img src={chip} width="30px" alt="" />
										<img src={kuda} width="60px" alt="" />
									</div>

									<div class=" space-y-5 mt-10">
										<h1 class=" text-white font-semibold text-xl lg:text-4xl tracking-[1em]">2061456248</h1>

										<div class=" flex justify-between items-center">
											<h1 class=" text-white font-semibold text-sm lg:text-xl">Kuda Bank</h1>
											<h1 class=" text-white font-semibold text-sm lg:text-lg">DAVID GREEN</h1>
										</div>
									</div>
								</div>
							</div>
						</TabItem>
					</Tabs>
					<div>
						<h1 class=" font-medium border-2 rounded-md p-4 border-gray-200 mt-5">
							Transfer $4544 to the account number above and click on "Confirm Payment". You'll be
							notified about the transaction thereafter.
						</h1>
					</div>
					<div class=" w-full flex flex-row mt-10 justify-center lg:justify-end">
						<div class=" w-full flex items-center space-x-5">
							<button
								on:click={() => goto('/payment/shipping')}
								class=" py-5 font-medium w-1/2 border-2 border-black-100 rounded-md"
							>
								Back
							</button>
							<button
								on:click={() => {}}
								class=" py-5 bg-black-100 text-white font-medium w-1/2 border-2 border-black-100 rounded-md"
							>
								Confirm Payment
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
