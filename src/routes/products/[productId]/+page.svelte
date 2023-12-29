<script lang="ts">
	import iphone from '$lib/assets/iphones/14promax/iphone-14-promax.png';

	import phone from '$lib/assets/icons/Vector.png';
	import cpu from '$lib/assets/icons/cpu.png';
	import core from '$lib/assets/icons/cores.png';
	import camera from '$lib/assets/icons/camera.png';
	import front from '$lib/assets/icons/front.png';
	import battery from '$lib/assets/icons/battery.png';
	import truck from '$lib/assets/icons/truck.png';
	import store from '$lib/assets/icons/shop.png';
	import verify from '$lib/assets/icons/verify.png';
	import show from '$lib/assets/iphones/show.png';
	import show1 from '$lib/assets/iphones/show-1.png';
	import show2 from '$lib/assets/iphones/show-2.png';
	import show3 from '$lib/assets/iphones/show-3.png';
	import { HeartOutline, HeartSolid } from 'flowbite-svelte-icons';
	import { fade, fly, scale } from 'svelte/transition';

	export let data;

	$: phoneDetail = data.phone;

	const phones = [
		{
			id: 1,
			category: 'iphone11',
			category_id: 1011,
			name: 'Apple iPhone 11 128GB (MQ233)',
			price: 1437,
			favorite: false,
			gallery: [''],
			'old-price': 1537,
			colors: ['#000000', '#781DBC', '#E10000', '#E1B000', '#E8E8E8'],
			storage: ['128GB', '256GB', '512GB', '1TB'],
			'screen-size': 6.7,
			cpu: 'Apple A16 Bionic',
			cores: 6,
			'main-camera': '48-12-12MP',
			'front-camera': '12MP',
			battery: 4323,
			resolution: [2796, 1290],
			'refresh-rate': 120,
			density: 460,
			'screen-type': 'OLED',
			additional: [
				'Dynamic Island',
				'Always-On display',
				'HDR display',
				'True Tone',
				'Wide color (P3)'
			]
		},

		{
			id: 2,
			category: 'iphone12',
			category_id: 1012,
			name: 'Apple iPhone 12 128GB (MQ233)',
			price: 1537,
			favorite: false,
			gallery: [''],
			'old-price': 1537,
			colors: ['#000000', '#781DBC', '#E10000', '#E1B000', '#E8E8E8'],
			storage: ['128GB', '256GB', '512GB', '1TB'],
			'screen-size': 6.7,
			cpu: 'Apple A16 Bionic',
			cores: 6,
			'main-camera': '48-12-12MP',
			'front-camera': '12MP',
			battery: 4323,
			resolution: [2796, 1290],
			'refresh-rate': 120,
			density: 460,
			'screen-type': 'OLED',
			additional: [
				'Dynamic Island',
				'Always-On display',
				'HDR display',
				'True Tone',
				'Wide color (P3)'
			]
		},

		{
			id: 3,
			category: 'iphone13',
			category_id: 1013,
			name: 'Apple iPhone 13 128GB (MQ233)',
			price: 1637,
			favorite: false,
			gallery: [''],
			'old-price': 1537,
			colors: ['#000000', '#781DBC', '#E10000', '#E1B000', '#E8E8E8'],
			storage: ['128GB', '256GB', '512GB', '1TB'],
			'screen-size': 6.7,
			cpu: 'Apple A16 Bionic',
			cores: 6,
			'main-camera': '48-12-12MP',
			'front-camera': '12MP',
			battery: 4323,
			resolution: [2796, 1290],
			'refresh-rate': 120,
			density: 460,
			'screen-type': 'OLED',
			additional: [
				'Dynamic Island',
				'Always-On display',
				'HDR display',
				'True Tone',
				'Wide color (P3)'
			]
		},

		{
			id: 4,
			category: 'iphone14',
			category_id: 1014,
			name: 'Apple iPhone 14 128GB (MQ233)',
			price: 1737,
			favorite: false,
			gallery: [''],
			'old-price': 1537,
			colors: ['#000000', '#781DBC', '#E10000', '#E1B000', '#E8E8E8'],
			storage: ['128GB', '256GB', '512GB', '1TB'],
			'screen-size': 6.7,
			cpu: 'Apple A16 Bionic',
			cores: 6,
			'main-camera': '48-12-12MP',
			'front-camera': '12MP',
			battery: 4323,
			resolution: [2796, 1290],
			'refresh-rate': 120,
			density: 460,
			'screen-type': 'OLED',
			additional: [
				'Dynamic Island',
				'Always-On display',
				'HDR display',
				'True Tone',
				'Wide color (P3)'
			]
		}
	];

	const like = false;

	const colors = ['#000000', '#781DBC', '#E10000', '#E1B000', '#E8E8E8'];

	$: specs = [
		{
			id: 1,
			title: 'Screen Size',
			value: phoneDetail['screen-size'],
			icon: phone
		},
		{
			id: 2,
			title: 'CPU',
			value: phoneDetail.cpu,
			icon: cpu
		},
		{
			id: 3,
			title: 'Number of Cores',
			value: phoneDetail.cores,
			icon: core
		},
		{
			id: 4,
			title: 'Main camera',
			value: phoneDetail['main-camera'],
			icon: camera
		},
		{
			id: 5,
			title: 'Front camera',
			value: phoneDetail['front-camera'],
			icon: front
		},
		{
			id: 6,
			title: 'Battery capacity',
			value: phoneDetail.battery,
			icon: battery
		}
	];
</script>

<div class=" w-full min-h-screen font-inter">
	<div class=" w-full font-inter py-[10vh] bg-white">
		<div class=" lg:flex lg:justify-between space-x-10 lg:items-center w-[80%] mx-auto">
			<div class=" w-[45%] max-h-[60vh] lg:space-x-10 lg:flex">
				<div class=" w-[20%] max-h-fit justify-end flex flex-col items-center space-y-6">
					<img src={show} alt="" />
					<img class=" opacity-40" src={show1} alt="" />
					<img class=" opacity-40" src={show2} alt="" />
					<img class=" opacity-40" src={show3} alt="" />
				</div>
				<div class=" w-[75%]">
					<img class=" w-full" src={iphone} alt="" />
				</div>
			</div>
			<div class=" w-[55%] space-y-6">
				<h1 class=" text-black-100 text-[40px] font-semibold font-inter">
					{phoneDetail.name}
				</h1>
				<div class=" flex items-center space-x-4">
					<h2 class=" text-[32px] font-medium">${phoneDetail.price}</h2>
					<del class=" text-[#A0A0A0] text-[24px]">${phoneDetail['old-price']}</del>
				</div>
				<div class=" flex items-center space-x-6">
					<p class=" font-medium text-[15px]">Select color:</p>
					<div class=" flex items-center space-x-2">
						{#each phoneDetail.colors as col}
							<div class={` w-8 h-8 rounded-[50%]`} style={`background-color: ${col};`}></div>
						{/each}
					</div>
				</div>
				<div class=" flex space-x-4">
					{#each phoneDetail.storage as storage}
						<button
							class=" w-[95px] flex items-center justify-center border-gray-200 rounded-md py-3 border-2"
							>{storage}</button
						>
					{/each}

					
				</div>
				<div class=" grid grid-cols-3 gap-4 w-full">
					{#each specs as spec}
						<div
							class=" space-x-3 items-center flex before: py-4 w-full bg-[#f4f4f4] rounded-lg px-5"
						>
							<img class=" w-5" src={spec.icon} alt="" />
							<div>
								<h2 class=" text-sm text-[#A7A7A7] font-semibold">{spec.title}</h2>
								<h2 class=" text-sm text-[#4E4E4E] font-semibold">{spec.value}</h2>
							</div>
						</div>
					{/each}
				</div>
				<div class=" flex items-center space-x-5">
					<button class=" border-2 w-[50%] py-4 rounded-md border-black-100">Add to Wishlist</button
					>
					<button class=" w-[50%] py-4 rounded-md text-white bg-black-100">Add to Cart</button>
				</div>
				<div class=" flex items-center justify-between">
					<div class=" flex space-x-4 items-center">
						<div class=" bg-[#F6F6F6] w-14 h-14 flex justify-center items-center rounded-lg">
							<img src={truck} class=" w-6" alt="" />
						</div>
						<div class=" text-sm space-y-1">
							<h1 class=" text-[#717171] font-medium">Free delivey</h1>
							<p class=" font-medium">1-2 days</p>
						</div>
					</div>
					<div class=" flex space-x-4 items-center">
						<div class=" bg-[#F6F6F6] w-14 h-14 flex justify-center items-center rounded-lg">
							<img src={store} class=" w-6" alt="" />
						</div>
						<div class=" text-sm space-y-1">
							<h1 class=" text-[#717171] font-medium">In Stock</h1>
							<p class=" font-medium">Active</p>
						</div>
					</div>
					<div class=" flex space-x-4 items-center">
						<div class=" bg-[#F6F6F6] w-14 h-14 flex justify-center items-center rounded-lg">
							<img src={verify} class=" w-6" alt="" />
						</div>
						<div class=" text-sm space-y-1">
							<h1 class=" text-[#717171] font-medium">Guarantee</h1>
							<p class=" font-medium">1 year</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class=" w-full bg-[#FAFAFA] py-[10vh]">
		<div class=" w-[80%] space-y-8 mx-auto bg-white py-10 px-8">
			<h1 class=" font-medium text-2xl">Detail</h1>
			<p class=" text-sm font-medium text-[#9D9D9D]">
				Just as a book is judged by its cover, the first thing you notice when you pick up a modern
				smartphone is the display. Nothing surprising, because advanced technologies allow you to
				practically level the display frames and cutouts for the front camera and speaker, leaving
				no room for bold design solutions. And how good that in such realities Apple everything is
				fine with displays. Both critics and mass consumers always praise the quality of the picture
				provided by the products of the Californian brand. And last year's 6.7-inch Retina panels,
				which had ProMotion, caused real admiration for many.
			</p>

			<div class=" w-full">
				<h2 class=" text-[20px] font-medium">Screen</h2>
				<div class=" py-2 flex justify-between border-b-2">
					<h1>Screen diagonal</h1>
					<h1>6.7</h1>
				</div>
			</div>

			<div class=" w-full">
				<h2 class=" text-[20px] font-medium">CPU</h2>
				<div class=" space-y-4">
					<div class=" py-2 flex justify-between border-b-2">
						<h1>CPU</h1>
						<h1>A16 Bionic</h1>
					</div>
					<div class=" py-2 flex justify-between border-b-2">
						<h1>Number of cores</h1>
						<h1>6</h1>
					</div>
				</div>
			</div>

			<div class=" w-full flex justify-center">
				<button class=" border-2 border-[#545454] rounded-lg text-black-100 py-3 w-[20%] mx-auto">
					VIEW MORE
				</button>
			</div>
		</div>
	</div>

	<div class=" w-full py-[10vh]">
		<div class=" w-[80%] space-y-4 mx-auto">
			<h1 class=" text-2xl font-medium">Related Products</h1>
			<div class=" grid grid-cols-2 lg:grid-cols-4 gap-5">
				{#each phones as item}
					<div class=" flex flex-col px-2 lg:px-4 py-4 lg:py-8 rounded-md w-full bg-grey-100">
						<div class=" w-full flex justify-end">
							{#if !like}
								<button transition:scale on:click={() => (item.favorite = true)}>
									<HeartOutline size="xl" strokeWidth="1.2" class="  text-grey-200" />
								</button>
							{:else}
								<button transition:scale on:click={() => (item.favorite = false)}>
									<HeartSolid size="xl" strokeWidth="1.2" class="  text-heart-100" />
								</button>
							{/if}
						</div>

						<div class="  mt-4 space-y-4 flex flex-col justify-between items-center">
							<img src={show} class=" md:max-h-48 max-h-[7.5rem] lg:max-h-48" alt="" />

							<div class="  h-[50%] space-y-2 flex flex-col justify-end text-center w-full">
								<div class=" text-center space-y-2">
									<h2 class=" text-sm lg:text-[18px] w-[90%] mx-auto font-medium text-center">
										{item.name}
									</h2>
									<h1 class=" text-lg lg:text-2xl font-semibold">${item.price}</h1>
								</div>

								<button
									class=" text-sm lg:text-base bg-black-100 py-3 w-[80%] mx-auto rounded-lg text-white font-medium"
								>
									Buy Now
								</button>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
