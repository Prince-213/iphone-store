<script lang="ts">
	import logo from '$lib/assets/logo/Frame 2.png';
	import {
		HeartOutline,
		CartOutline,
		UserOutline,
		SearchOutline,
		EnvelopeSolid,
		UserCircleOutline
	} from 'flowbite-svelte-icons';
	import { Button, Indicator } from 'flowbite-svelte';
	import person from '$lib/assets/images/pexels-andrea-piacquadio-837358.jpg';

	import lottie, { type AnimationItem } from 'lottie-web';
	import animationData from '$lib/assets/lottie/Animation - 1699732843324.json';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	let like = false;

	let auth = true;

	let animationContainer: HTMLButtonElement;

	let open = false;

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

<div class=" top-0 w-full z-50">
	<header class=" border-b-2 py-6 w-full mx-auto bg-white">
		<div class=" flex w-[80%] mx-auto justify-between items-center">
			<div class=" w-[30%] flex justify-between items-center">
				<button on:click={() => goto('/')}>
					<img src={logo} alt="" />
				</button>
			</div>
			<div class="hidden lg:flex space-x-6 items-center">
				<ul class=" text-base text-gray-400 font-bold flex space-x-8">
					<button
						on:click={() => goto('/')}
						class="rounded flex items-center text-left space-x-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
					>
						<h2 class=" font-bold text-black-100">Home</h2>
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
						<h2>Shop Now</h2>
					</button>
					<div class=" flex items-center space-x-10 text-[#000]">
						{#if auth}
							<button class="relative">
								<HeartOutline strokeWidth="1.5" size="xl" class="text-black-100 dark:text-white" />
								<span class="sr-only">Notifications</span>
								<Indicator
									color="dark"
									border
									size="xl"
									placement="top-right"
									class="text-xs text-white font-bold">0</Indicator
								>
							</button>
						{:else}
							<button class=" "><HeartOutline size="lg" strokeWidth="1.3" /></button>
						{/if}

						{#if auth}
							<button class="relative">
								<CartOutline strokeWidth="1.5" size="xl" class="text-black-100 dark:text-white" />
								<span class="sr-only">Notifications</span>
								<Indicator
									color="dark"
									border
									size="xl"
									placement="top-right"
									class="text-xs text-white font-bold">0</Indicator
								>
							</button>
						{:else}
							<button class=" "><CartOutline size="lg" strokeWidth="1.3" /></button>
						{/if}

						{#if auth}
							<button class="relative">
								<img class=" w-9 h-9 rounded-[50%]" src={person} alt="" />
							</button>
						{:else}
							<button class=" "><UserOutline size="lg" strokeWidth="1.3" /></button>
						{/if}
					</div>
				</ul>
			</div>
			<div class=" lg:hidden flex items-center lg:space-x-6">
				<div class=" flex items-center mr-10 space-x-5">
					{#if auth}
						<button class="relative">
							<HeartOutline strokeWidth="1.4" size="lg" class="text-black-100 dark:text-white" />
							<span class="sr-only">Notifications</span>
							<Indicator
								color="dark"
								border
								size="lg"
								placement="top-right"
								class="text-xs p-2 text-white font-bold">4</Indicator
							>
						</button>
					{:else}
						<button class=" "><HeartOutline size="lg" strokeWidth="1.3" /></button>
					{/if}

					{#if auth}
						<button class="relative">
							<CartOutline strokeWidth="1.4" size="lg" class="text-black-100 dark:text-white" />
							<span class="sr-only">Notifications</span>
							<Indicator
								color="dark"
								border
								size="lg"
								placement="top-right"
								class="text-xs p-2 text-white font-bold">0</Indicator
							>
						</button>
					{:else}
						<button class=" "><CartOutline size="lg" strokeWidth="1.3" /></button>
					{/if}

					
					
				</div>

				<button class=" w-[20px] h-[20px]" bind:this={animationContainer} on:click={toggle} />
			</div>
		</div>
	</header>
	<div
		class={` w-full transition-all duration-200 ${
			open ? 'h-[40vh]' : 'h-[0vh]'
		}  overflow-y-hidden bg-white  lg:hidden`}
	>
		<div class="flexflex-col lg:hidden pl-8 pt-4 pb-8">
			<ul class=" space-y-4 text-gray-500 flex flex-col justify-start items-start font-bold">
				<button
					on:click={() => goto('/')}
					class="rounded flex items-center text-left space-x-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
				>
					<h2 class=" font-bold text-[#000]">Home</h2>
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
					<h2>Shop Now</h2>
				</button>
				<div class=" pt-4 flex items-center space-x-8 text-[#000]">
					<button class=" "><UserCircleOutline size="lg" strokeWidth="1.3" /></button>
				</div>
			</ul>
		</div>
	</div>
</div>

<style>
</style>
