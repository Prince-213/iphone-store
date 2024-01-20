<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import iphone from '$lib/assets/iphones/14promax/iphone-14-promax.png';

	import { reveal } from 'svelte-reveal';

	import { navigating, page } from '$app/stores';

	import Loader from '../../components/Loader.svelte';

	import { MapPinIcon, TruckIcon, CreditCardIcon } from 'lucide-svelte';
	import { MapPinSolid, TruckSolid, PenSolid, CloseSolid, PlusSolid } from 'flowbite-svelte-icons';
	import { Badge, Helper, Radio } from 'flowbite-svelte';
	import Address from '../../components/Address.svelte';
	import { goto } from '$app/navigation';

	import address from '$lib/data/adress.json';
	import { checkOutCart } from '$lib/data/store';

	console.log($checkOutCart);

	let group3 = 2;

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

	import { Section } from 'flowbite-svelte-blocks';
	import { Label, Input, Button, Modal, Textarea, Select } from 'flowbite-svelte';
	let defaultModal = false;
	const handleSubmit = () => {
		alert('Form submited.');
	};
	let selected;
	let countries = [
		{ value: 'tv', name: 'TV/Monitors' },
		{ value: 'pc', name: 'PC' },
		{ value: 'phone', name: 'Phones' }
	];
</script>

{#if $navigating}
	<div use:reveal={{ transition: 'fade', threshold: 0.1 }}>
		<Loader />
	</div>
{:else}
	<div class=" w-full min-h-screen">
		<Modal title="Add Product" bind:open={defaultModal} autoclose class="min-w-full">
			<form on:submit={handleSubmit}>
				<div class="grid gap-4 mb-4 sm:grid-cols-2">
					<div>
						<Label for="name" class="mb-2">Name</Label>
						<Input type="text" id="name" placeholder="Type product name" required />
					</div>
					<div>
						<Label for="brand" class="mb-2">Brand</Label>
						<Input type="text" id="brand" placeholder="Product brand" required />
					</div>
					<div>
						<Label for="price" class="mb-2">Price</Label>
						<Input type="text" id="price" placeholder="$29999" required />
					</div>
					<div>
						<Label
							>Category
							<Select class="mt-2" items={countries} bind:value={selected} required />
						</Label>
					</div>
					<div class="sm:col-span-2">
						<Label for="description" class="mb-2">Description</Label>
						<Textarea
							id="description"
							placeholder="Your description here"
							rows="4"
							name="description"
							required
						/>
					</div>
					<Button type="submit" class="w-52">
						<svg
							class="mr-1 -ml-1 w-6 h-6"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
								clip-rule="evenodd"
							/></svg
						>
						Add new product
					</Button>
				</div>
			</form>
		</Modal>
		<div
			use:reveal={{ transition: 'slide', threshold: 0.2, duration: 500 }}
			class=" lg:w-[80%] w-[95%] flex flex-col mx-auto py-[10vh] mt-[48px]"
		>
			<h1 class=" font-semibold text-xl">Select Address</h1>
			<ul class=" py-8 w-full space-y-5">
				<li
					class="rounded-md p-6 flex items-center justify-between bg-[#f6f6f6] hover:bg-gray-100 dark:hover:bg-gray-600"
				>
					<div>
						<Radio class=" " color="green" name="group3" bind:group={group3} value={1}
							><div class=" ml-2 flex space-x-6">
								<p class=" text-lg">2118 Thomridge</p>
								<Badge large class=" bg-black-100 text-white">HOME</Badge>
							</div></Radio
						>
						<Helper class="ps-6 mt-4">
							<div class=" ml-2">
								<p class=" text-base">2118 Thornridge Cir.Syracuse, Connecticut 35624</p>
								<p class=" text-base mt-2">(234) 555-0104</p>
							</div>
						</Helper>
					</div>
					<div class=" flex items-center space-x-5 lg:space-x-10">
						<button>
							<PenSolid />
						</button>
						<button>
							<CloseSolid />
						</button>
					</div>
				</li>
				<li
					class="rounded-md p-6 flex items-center justify-between bg-[#f6f6f6] hover:bg-gray-100 dark:hover:bg-gray-600"
				>
					<div>
						<Radio class=" " color="green" name="group3" bind:group={group3} value={2}
							><div class=" ml-2 flex space-x-6">
								<p class=" text-lg">2118 Thomridge</p>
								<Badge large class=" bg-black-100 text-white">HOME</Badge>
							</div></Radio
						>
						<Helper class="ps-6 mt-4">
							<div class=" ml-2">
								<p class=" text-base">2118 Thornridge Cir.Syracuse, Connecticut 35624</p>
								<p class=" text-base mt-2">(234) 555-0104</p>
							</div>
						</Helper>
					</div>
					<div class=" flex items-center space-x-5 lg:space-x-10">
						<button>
							<PenSolid />
						</button>
						<button>
							<CloseSolid />
						</button>
					</div>
				</li>
			</ul>
			<div class=" w-full flex flex-col justify-center items-center">
				<div class=" mt-5 w-full flex items-center justify-between">
					<div class=" w-[48%] border-t-2 border-dashed opacity-25 border-black-100"></div>
					<button
						on:click={() => (defaultModal = true)}
						class=" w-[30px] h-[30px] rounded-[50%] bg-black-100 flex items-center justify-center"
					>
						<PlusSolid size="sm" class=" text-white" />
					</button>
					<div class=" w-[48%] opacity-25 border-t-2 border-dashed border-black-100"></div>
				</div>
				<h1 class=" text-base font-semibold">Add New Address</h1>
			</div>
			<div class=" w-full flex flex-row mt-10 justify-center lg:justify-end">
				<div class=" lg:w-[30%] w-[70%] flex items-center space-x-5">
					<button
						on:click={() => goto('/cart')}
						class=" py-5 font-medium w-1/2 border-2 border-black-100 rounded-md"
					>
						Back
					</button>
					<button
						on:click={() => goto('/payment/shipping')}
						class=" py-5 bg-black-100 text-white font-medium w-1/2 border-2 border-black-100 rounded-md"
					>
						Next
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}
