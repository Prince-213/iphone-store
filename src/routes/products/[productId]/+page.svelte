<script lang="ts">
	import iphone from '$lib/assets/iphones/iphone13/iphone-13.png';

	import phone from '$lib/assets/icons/Vector.png';
	import cpu from '$lib/assets/icons/cpu.png';
	import core from '$lib/assets/icons/cores.png';
	import camera from '$lib/assets/icons/camera.png';
	import front from '$lib/assets/icons/front.png';
	import battery from '$lib/assets/icons/battery.png';
	import truck from '$lib/assets/icons/truck.png';
	import store from '$lib/assets/icons/shop.png';
	import verify from '$lib/assets/icons/verify.png';
	import show from '$lib/assets/iphones/iphone13/iphone-13.png';
	import show1 from '$lib/assets/iphones/show-1.png';
	import show2 from '$lib/assets/iphones/show-2.png';
	import show3 from '$lib/assets/iphones/show-3.png';
	import { HeartOutline, HeartSolid, UsersSolid } from 'flowbite-svelte-icons';
	import { fade, fly, scale } from 'svelte/transition';

	export let data;

	let phoneDetail = data.phone;

	import { reveal } from 'svelte-reveal';

	import { navigating } from '$app/stores';

	import Loader from '../../../components/Loader.svelte';
	import { supabase } from '$lib/supabaseClient';

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

	$: liked = data.wished;

	$: carted = data.carted

	console.log(liked)

	//const colors = ['#000000', '#781DBC', '#E10000', '#E1B000', '#E8E8E8'];

	$: specs = [
		{
			id: 1,
			title: 'Screen Size',
			value: phoneDetail['screen_size'],
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
			value: phoneDetail['main_camera'],
			icon: camera
		},
		{
			id: 5,
			title: 'Front camera',
			value: phoneDetail['front_camera'],
			icon: front
		},
		{
			id: 6,
			title: 'Battery capacity',
			value: phoneDetail.battery,
			icon: battery
		}
	];

	let userId = data.userId;

	import wish from '$lib/assets/lottie/icons8-heart.gif';
	import cart from '$lib/assets/lottie/icons8-cart.gif';
	import { invalidateAll } from '$app/navigation';
	import { HeartIcon, ShoppingCartIcon } from 'lucide-svelte';

	let activeColor = 0;
	let activeStorage = 0;
	let moreInfo = false;
	let disabled = false;

	let wishing = false;
	let carting = false;

	const addToWishList = async () => {
		wishing = true;
		try {
			const { data, error } = await supabase
				.from('favourites')
				.upsert({
					product_id: phoneDetail.product_id,
					user_id: userId,
					favourite_id: `${phoneDetail.product_id}${userId}`
				})
				.select();

			wishing = false;
			if (error) {
				if (error.code == '23505') {
					console.log('delete');

					//const { error } = await supabase
					//	.from('favourites')
					//	.delete()
					//	.eq('favourite_id', `${phoneDetail.product_id}${userId}`);
				}
			}

			invalidateAll();
				
		} catch (error) {}
	};

	const addToCart = async () => {
		carting = true;
		try {
			const { data, error } = await supabase
				.from('carts')
				.upsert({
					product_id: phoneDetail.product_id,
					user_id: userId,
					cart_id: `${phoneDetail.product_id}${userId}`
				})
				.select();

			carting = false;
			if (error) {
				if (error.code == '23505') {
					console.log('delete');

					//const { error } = await supabase
					//	.from('favourites')
					//	.delete()
					//	.eq('favourite_id', `${phoneDetail.product_id}${userId}`);
				}
			}

			invalidateAll();
				
		} catch (error) {}
	}
</script>

{#if $navigating}
	<div use:reveal={{ transition: 'fade' }}>
		<Loader />
	</div>
{:else}
	<div use:reveal={{ transition: 'fade', opacity: 1 }} class=" w-full min-h-screen font-inter">
		<div class=" w-full font-inter py-[5vh] lg:py-[10vh] bg-white">
			<div class=" lg:flex lg:justify-between lg:space-x-10 lg:items-center w-[80%] mx-auto">
				<div
					use:reveal={{ transition: 'fly', duration: 400 }}
					class=" w-full lg:w-[40%] flex flex-col-reverse max-h-[60vh] lg:space-x-10 pt-5 lg:pt-0 lg:flex items-center lg:flex-row"
				>
					<div class=" w-full">
						<img class=" object-contain w-auto h-[70vh]" src={`${phoneDetail.image}`} alt="" />
					</div>
				</div>
				<div use:reveal={{ transition: 'slide', duration: 400 }} class=" lg:w-[60%] space-y-6">
					<h1 class=" text-black-100 text-left text-3xl lg:text-[40px] font-semibold font-inter">
						{phoneDetail.product_name}
					</h1>
					<div class=" flex items-center space-x-4">
						<h2 class=" text-[32px] font-medium">₦{Intl.NumberFormat().format(phoneDetail.price)}</h2>
						<del class=" text-[#A0A0A0] text-[24px]">₦{Intl.NumberFormat().format(phoneDetail['old_price'])}</del>
					</div>
					<div class=" flex items-center space-x-6">
						<p class=" font-medium text-[15px]">Select color:</p>
						<div class=" flex items-center space-x-4">
							<button
								on:click={() => (activeColor = 0)}
								class={` w-8 h-8 relative  rounded-[50%]`}
								style={`background-color: #${phoneDetail.color}; `}
							>
								<div
									style={`border-color: #${phoneDetail.color};`}
									class=" -translate-x-1 -translate-y-1 w-10 h-10 border-2 transition-all duration-100 rounded-[50%]"
								></div>
							</button>
						</div>
					</div>
					<div class=" flex space-x-4">
						<button
							on:click={() => (activeStorage = 0)}
							style={`border-color: ${'#000'};`}
							class=" w-[95px] transition-all duration-100 flex items-center justify-center border-gray-200 rounded-md py-3 text-sm lg:text-base border-2"
							>{phoneDetail.storage}GB</button
						>
					</div>
					<div class=" grid grid-cols-2 lg:grid-cols-3 gap-4 w-full">
						{#each specs as spec}
							<div
								class=" space-x-3 items-center flex before: py-4 w-full bg-[#f4f4f4] rounded-lg px-5"
							>
								<img class=" lg:w-5 w-4" src={spec.icon} alt="" />
								<div>
									<h2 class=" text-[12px] lg:text-sm text-[#A7A7A7] font-semibold">{spec.title}</h2>
									<h2 class=" text-[12px] lg:text-sm text-[#4E4E4E] font-semibold">{spec.value}</h2>
								</div>
							</div>
						{/each}
					</div>
					<div class=" flex lg:flex-row flex-col items-center lg:space-x-5 space-y-5 lg:space-y-0">
						<button
							on:click={addToWishList}
							class=" relative border-2 w-full lg:w-[50%] py-4 rounded-md border-black-100 flex items-center justify-center space-x-8"
						>
							<p>Add to Wishlist</p>
							{#if wishing}
								<div class=" right-[10px] absolute"><img width="30px" src={wish} alt="" /></div>
								
							{:else if liked}
							<div class=" absolute right-[10px]" transition:scale>
								<HeartSolid size="lg" strokeWidth="1.2" class="   text-heart-100" />
								
							</div>
							{/if}
						</button>
						<button
							on:click={addToCart}
							class=" relative border-2 w-full lg:w-[50%] py-4 rounded-md border-black-100 flex items-center justify-center space-x-8"
						>
							<p>Add to Cart</p>
							{#if carting}
								<div class=" right-[10px] absolute"><img width="25px" src={cart} alt="" /></div>
								
							{:else if carted}
							<div class=" absolute  right-[10px]" transition:scale>
								<ShoppingCartIcon color="rgb(14 159 110)"/>
								
							</div>
							{/if}
						</button>
					</div>
					<div class=" flex items-center justify-between">
						<div
							class=" flex lg:flex-row flex-col lg:space-y-0 space-y-4 lg:space-x-4 items-center"
						>
							<div class=" bg-[#F6F6F6] w-14 h-14 flex justify-center items-center rounded-lg">
								<img src={truck} class=" w-6" alt="" />
							</div>
							<div class=" text-sm space-y-1">
								<h1 class=" text-[#717171] font-medium">Free delivey</h1>
								<p class=" font-medium">1-2 days</p>
							</div>
						</div>
						<div
							class=" flex lg:flex-row flex-col lg:space-y-0 space-y-4 lg:space-x-4 items-center"
						>
							<div class=" bg-[#F6F6F6] w-14 h-14 flex justify-center items-center rounded-lg">
								<img src={store} class=" w-6" alt="" />
							</div>
							<div class=" text-sm space-y-1">
								<h1 class=" text-[#717171] font-medium">In Stock</h1>
								<p class=" font-medium">Active</p>
							</div>
						</div>
						<div
							class=" flex lg:flex-row flex-col lg:space-y-0 space-y-4 lg:space-x-4 items-center"
						>
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

		<div class=" w-full bg-[#FAFAFA] py-[5vh] lg:py-[10vh]">
			<div class=" w-[80%] space-y-8 mx-auto bg-white py-10 px-8">
				<h1 class=" font-medium text-2xl">Detail</h1>
				<p class=" text-sm font-medium text-[#9D9D9D]">
					Just as a book is judged by its cover, the first thing you notice when you pick up a
					modern smartphone is the display. Nothing surprising, because advanced technologies allow
					you to practically level the display frames and cutouts for the front camera and speaker,
					leaving no room for bold design solutions. And how good that in such realities Apple
					everything is fine with displays. Both critics and mass consumers always praise the
					quality of the picture provided by the products of the Californian brand. And last year's
					6.7-inch Retina panels, which had ProMotion, caused real admiration for many.
				</p>

				<div class=" w-full">
					<h2 class=" text-[20px] font-medium">Screen</h2>
					<div class=" py-2 flex justify-between border-b-2">
						<h1>Screen diagonal</h1>
						<h1>{phoneDetail['screen_size']}</h1>
					</div>
				</div>

				<div class=" w-full">
					<h2 class=" text-[20px] font-medium">CPU</h2>
					<div class=" space-y-4">
						<div class=" py-2 flex justify-between border-b-2">
							<h1>CPU</h1>
							<h1>{phoneDetail['cpu']}</h1>
						</div>
						<div class=" py-2 flex justify-between border-b-2">
							<h1>Number of cores</h1>
							<h1>{phoneDetail['cores']}</h1>
						</div>
					</div>
					{#if moreInfo}
						<div use:reveal={{ transition: 'fly', threshold: 0.2, duration: 200 }}>
							<div class=" mt-8">
								<h2 class=" text-[20px] font-medium">CAMERA</h2>
								<div class=" space-y-4">
									<div class=" py-2 flex justify-between border-b-2">
										<h1>Main Camera</h1>
										<h1>{phoneDetail['main_camera']}</h1>
									</div>
									<div class=" py-2 flex justify-between border-b-2">
										<h1>Front Camera</h1>
										<h1>{phoneDetail['front_camera']}</h1>
									</div>
								</div>
							</div>

							<div class=" mt-8">
								<h2 class=" text-[20px] font-medium">Battery</h2>
								<div class=" space-y-4">
									<div class=" py-2 flex justify-between border-b-2">
										<h1>Battery</h1>
										<h1>{phoneDetail.battery}MAH</h1>
									</div>
									<div class=" py-2 flex justify-between border-b-2">
										<h1>Battery Capacity</h1>
										<h1>{phoneDetail['battery']}</h1>
									</div>
								</div>
							</div>

							<div class=" mt-8">
								<h2 class=" text-[20px] font-medium">Screen</h2>
								<div class=" space-y-4">
									<div class=" py-2 flex justify-between border-b-2">
										<h1>Screen resolution</h1>
										<h1>{phoneDetail['resolution']}</h1>
									</div>
									<div class=" py-2 flex justify-between border-b-2">
										<h1>Refresh Rate</h1>
										<h1>{phoneDetail['refresh_rate']}HZ</h1>
									</div>
									<div class=" py-2 flex justify-between border-b-2">
										<h1>Pixel Density</h1>
										<h1>{phoneDetail.density}PI</h1>
									</div>
									<div class=" py-2 flex justify-between border-b-2">
										<h1>Screen Type</h1>
										<h1>{phoneDetail['screen_type']}</h1>
									</div>
								</div>

								<div class=" mt-8">
									<h2 class=" text-[20px] font-medium">Additional Information</h2>
									<div class=" space-y-4">
										<p>{phoneDetail['additional_info']}</p>
									</div>
								</div>
							</div>
						</div>
					{/if}
				</div>

				<div class=" w-full flex justify-center">
					<button
						on:click={() => (moreInfo = !moreInfo)}
						class=" border-2 border-[#545454] rounded-lg text-black-100 py-3 w-full lg:w-[20%] mx-auto"
					>
						VIEW {#if moreInfo}
							LESS
						{:else}
							MORE
						{/if}
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
{/if}

<style>
</style>
