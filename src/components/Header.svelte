<script lang="ts">
	
	import logo from '$lib/assets/logo/logo.jpg';
	import {
		HeartOutline,
		CartOutline,
		UserOutline,
		SearchOutline,
		EnvelopeSolid,
		UserCircleOutline,
		ChevronDownSolid
	} from 'flowbite-svelte-icons';
	import {
		Button,
		Indicator,
		Avatar,
		Tooltip,
		NavLi,
		Dropdown,
		DropdownItem
	} from 'flowbite-svelte';
	import person from '$lib/assets/images/pexels-andrea-piacquadio-837358.jpg';
	

	import { LogOutIcon } from 'lucide-svelte';

	export let auth: boolean;
	export let userName: string;
	export let userEmail: string;
	export let userAvatar: string;
	export let wishlist: number | undefined;
	export let cart: number | undefined;

	import lottie, { type AnimationItem } from 'lottie-web';
	import animationData from '$lib/assets/lottie/Animation - 1699732843324.json';
	import { onMount } from 'svelte';
	import { goto, invalidateAll } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import { supabase } from '$lib/supabaseClient';
	import { redirect } from '@sveltejs/kit';

	$: activePath = $page.url.pathname;

	let like = false;

	let animationContainer: HTMLButtonElement;

	let open = false;

	let placement = 'right';

	const toggle = () => {
		open = !open;
		menuAnimation.setSpeed(3);
		if (open) {
			menuAnimation.goToAndPlay(0, true);
			menuAnimation.setDirection(1);
		} else {
			menuAnimation.goToAndPlay(60, true);
			menuAnimation.setDirection(-1);
		}
	};

	let menuAnimation: AnimationItem;

	let lastFrame: number;

	const signOut = async () => {
		
	
		throw redirect(307, '/signout')
		invalidateAll();
		
		
	};

	onMount(() => {
		menuAnimation = lottie.loadAnimation({
			container: animationContainer,
			animationData,
			loop: false,
			autoplay: false
		});

		lastFrame = menuAnimation.totalFrames - 1;

		menuAnimation.goToAndStop(0, true);
	});

	
</script>

<div class=" top-0 w-full">
	<header class=" border-b-2 py-4 w-full mx-auto bg-white">
		<div class=" flex w-[90%] lg:w-[80%] mx-auto justify-between items-center">
			<div class=" w-[30%] flex justify-between items-center">
				<button class=" w-[60px] h-[60px]  lg:w-[80px] lg:h-[80px] rounded-full overflow-hidden" on:click={() => goto('/')}>
					<img src={logo} class="" alt="" />
				</button>
			</div>

			<div class="hidden lg:flex space-x-6 items-center">
				<ul class=" text-base text-gray-400 font-bold flex space-x-8">
					<button
						on:click={() => goto('/')}
						class="rounded flex items-center text-left space-x-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
					>
						<h2 class={` ${activePath == '/' ? 'font-bold text-black-100' : ''} `}>Home</h2>
					</button>

					<button
						on:click={() => goto('/')}
						class="rounded flex items-center text-left space-x-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
					>
						<h2>About Us</h2>
					</button>
					<button
						on:click={() => goto('/')}
						class="rounded flex items-center text-left space-x-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
					>
						<h2>Contact Us</h2>
					</button>

					<button
						on:click={() => goto('/products')}
						class="rounded flex items-center text-left space-x-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
					>
						<h2 class={` ${activePath == '/products' ? 'font-bold text-black-100' : ''} `}>
							Shop Now
						</h2>
					</button>
					<div class=" flex items-center space-x-10 text-[#000]">
						{#if auth}
							<button on:click={() => goto('/wishlist')} class="relative">
								<HeartOutline strokeWidth="1.5" size="xl" class="text-black-100 dark:text-white" />
								<span class="sr-only">Notifications</span>
								<Indicator
									color="dark"
									border
									size="xl"
									placement="top-right"
									class="text-xs text-white font-bold">{wishlist ?? 0}</Indicator
								>
							</button>
						{:else}
							<button on:click={() => goto('/wishlist')} class=" "
								><HeartOutline size="lg" strokeWidth="1.3" /></button
							>
						{/if}

						{#if auth}
							<button on:click={() => goto('/cart')} class="relative">
								<CartOutline strokeWidth="1.5" size="xl" class="text-black-100 dark:text-white" />
								<span class="sr-only">Notifications</span>
								<Indicator
									color="dark"
									border
									size="xl"
									placement="top-right"
									class="text-xs text-white font-bold">{cart ?? 0}</Indicator
								>
							</button>
						{:else}
							<button on:click={() => goto('/cart')} class=" "
								><CartOutline size="lg" strokeWidth="1.3" /></button
							>
						{/if}

						{#if auth}
							<div class=" drop">
								<Button pill color="light" id="avatar_with_name" class=" pl-1 pt-1 pb-1 pr-2">
									<Avatar src={`https://hnuabzvdekpcvstajmkn.supabase.co/storage/v1/object/public/avatars/public/${userAvatar}`} class="me-2" />
									{userName}
								</Button>
								<Dropdown class=" drop z-50" triggeredBy="#avatar_with_name">
									<div slot="header" class="px-4 py-2">
										<span class="block text-sm text-gray-900 dark:text-white">{userName}</span>
										<span class="block truncate text-sm font-medium">{userEmail}</span>
									</div>

									<DropdownItem slot="footer">
										<button on:click={() => goto('/signout')}  class=" flex space-x-2 hreitems-center"
											><LogOutIcon />
											<p>Sign Out</p></button
										>
									</DropdownItem>
								</Dropdown>
							</div>
						{:else}
							<button class=" "><UserOutline size="lg" strokeWidth="1.3" /></button>
						{/if}
					</div>
				</ul>
			</div>
			<div class=" lg:hidden flex items-center lg:space-x-6">
				<div class=" flex items-center mr-10 space-x-5">
					{#if auth}
						<button on:click={() => goto('/wishlist')} class="relative">
							<HeartOutline strokeWidth="1.4" size="lg" class="text-black-100 dark:text-white" />
							<span class="sr-only">Notifications</span>
							<Indicator
								color="dark"
								border
								size="lg"
								placement="top-right"
								class="text-xs p-2 text-white font-bold">{wishlist ?? 0}</Indicator
							>
						</button>
					{:else}
						<button on:click={() => goto('/wishlist')} class=" "
							><HeartOutline size="lg" strokeWidth="1.3" /></button
						>
					{/if}

					{#if auth}
						<button on:click={() => goto('/cart')} class="relative">
							<CartOutline strokeWidth="1.4" size="lg" class="text-black-100 dark:text-white" />
							<span class="sr-only">Notifications</span>
							<Indicator
								color="dark"
								border
								size="lg"
								placement="top-right"
								class="text-xs p-2 text-white font-bold">{cart ?? 0}</Indicator
							>
						</button>
					{:else}
						<button on:click={() => goto('/cart')} class=" "
							><CartOutline size="lg" strokeWidth="1.3" /></button
						>
					{/if}
				</div>

				<button class=" w-[20px] h-[20px]" bind:this={animationContainer} on:click={toggle} />
			</div>
		</div>
	</header>
	<div
		class={` w-full transition-all duration-200 ${
			open ? 'h-[48vh]' : 'h-[0vh]'
		}  overflow-y-hidden bg-white shadow-sm lg:hidden`}
	>
		<div class="flexflex-col lg:hidden pl-8 pt-4 pb-8">
			<ul class=" space-y-4 text-gray-500 flex flex-col justify-start items-start font-bold">
				<button
					on:click={() => goto('/')}
					class="rounded flex items-center text-left space-x-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
				>
					<h2 class={` ${activePath == '/' ? 'font-bold text-black-100' : ''} `}>Home</h2>
				</button>

				<button
					on:click={() => goto('/')}
					class="rounded flex items-center text-left space-x-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
				>
					<h2>About Us</h2>
				</button>
				<button
					on:click={() => goto('/')}
					class="rounded flex items-center text-left space-x-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
				>
					<h2>Contact Us</h2>
				</button>

				<button
					on:click={() => goto('/products')}
					class="rounded flex items-center text-left space-x-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
				>
					<h2 class={` ${activePath == '/products' ? 'font-bold text-black-100' : ''} `}>
						Shop Now
					</h2>
				</button>
				<div>
					{#if auth}
						<div class=" drop">
							<Button pill color="light" id="avatar_with_name" class="pl-1 pt-1 pb-1 pr-2">
								<Avatar src={`https://hnuabzvdekpcvstajmkn.supabase.co/storage/v1/object/public/avatars/public/${userAvatar}`} class="me-2" />
								{userName}
							</Button>
							<Dropdown class=" drop z-50" triggeredBy="#avatar_with_name">
								<div slot="header" class="px-4 py-2">
									<span class="block text-sm text-gray-900 dark:text-white">{userName}</span>
									<span class="block truncate text-sm font-medium">{userEmail}</span>
								</div>

								<DropdownItem slot="footer">
									<button on:click={() => goto('/signout')}  class=" flex space-x-2 items-center"
											><LogOutIcon />
											<p>Sign Out</p></button
									>
								</DropdownItem>
							</Dropdown>
						</div>
					{:else}
						<button class=" "><UserOutline size="lg" strokeWidth="1.3" /></button>
					{/if}
				</div>
			</ul>
		</div>
	</div>
</div>

<style>
	.drop {
		z-index: 9999999;
	}
</style>
