<script lang="ts">
	import { CreditCardIcon, MapPinIcon, TruckIcon } from 'lucide-svelte';
	import type { LayoutData } from './$types';
    import {reveal} from 'svelte-reveal';

	export let data: LayoutData;

    import { page } from '$app/stores'

    $: path = $page.url.pathname
</script>

<div class=" lg:pl-0 w-full min-h-screen overflow-x-hidden">

	<div   class={` ${path == '/payment/credit' ? '-translate-x-[40%]' : '-translate-x-0'}  mx-auto lg:-translate-x-0 w-[150%] lg:w-[80%] flex justify-between items-center mt-[72px]`}>
		<div use:reveal={{ transition: 'slide' }}  class={` ${path == '/payment' ? 'opacity-100' : 'opacity-25'} flex space-x-2 items-center`}>
			<div class=" w-[32px] h-[32px] rounded-[50%] bg-black-100 flex items-center justify-center">
				<MapPinIcon color="white" class="  text-white rounded-full" />
			</div>
			<div>
				<h4 class=" font-semibold">Step 1</h4>
				<h1 class=" font-semibold lg:text-lg">Address</h1>
			</div>
		</div>
		<div use:reveal={{ transition: 'slide', delay: 900 }}   class={` ${path == '/payment/shipping' ? 'opacity-100' : 'opacity-25'}   w-[70%] justify-between flex items-center`}>
			<div class=" w-[38%] border-t-2 border-dashed border-black-100"></div>
			<div class=" w-[40%] lg:w-[18%] flex space-x-2 items-center">
				<div></div>
				<div class=" w-[32px] h-[32px] rounded-[50%] bg-black-100 flex items-center justify-center">
					<TruckIcon color="white" class="  text-white rounded-full" />
				</div>
				<div>
					<h4 class=" font-semibold">Step 2</h4>
					<h1 class=" font-semibold lg:text-lg">Shipping</h1>
				</div>
			</div>
			<div class=" w-[39%] border-t-2 border-dashed border-black-100"></div>
		</div>
		<div use:reveal={{ transition: 'slide', delay: 1400 }}  class={` ${path == '/payment/credit' ? 'opacity-100' : 'opacity-25'} flex space-x-2 items-center`}>
			<div class=" w-[32px] h-[32px] rounded-[50%] bg-black-100 flex items-center justify-center">
				<CreditCardIcon color="white" class="  text-white rounded-full" />
			</div>
			<div>
				<h4 class=" font-semibold">Step 3</h4>
				<h1 class=" font-semibold lg:text-lg">Payment</h1>
			</div>
		</div>
	</div>
	<slot />
</div>
