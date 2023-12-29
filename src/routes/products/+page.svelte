<script lang="ts">
	import type { PageData } from './$types';
	import { AccordionItem, Accordion, Range, Input, Checkbox } from 'flowbite-svelte';
	import { HeartOutline, HeartSolid } from 'flowbite-svelte-icons';
	import { fade, fly, scale } from 'svelte/transition';
	import { goto, invalidateAll } from '$app/navigation';

	export let data;

	const nextLimit = async (skip: number, limit: number) => {
        if (skip < 0 ) {
            skip = 0
        }
		await invalidateAll();
		goto(`/products?limit=${limit}&skip=${skip}`);
	};

	$: total = data.total;
	$: iphonesImg = data.iphoneImgs;
	$: phones = data.phones;

	let like = false;

	let pageSize = 12;

	$: totalPages = Math.ceil(total / pageSize);

	$: active = data.skip;

	let priceValue = 0;

	const storage = [16, 32, 64, 128, 256, 512];
</script>

<div class=" w-full min-h-screen pb-[5vh] pt-[6vh]">
	<div class=" lg:flex w-[95%] lg:w-[80%] space-x-0 lg:space-x-8 lg:justify-between mx-auto">
		
		<div class=" w-full flex flex-col items-center space-y-10">
			<section class=" w-full space-y-10 min-h-screen">
				<div class=" flex items-center space-x-3">
					<p class=" text-base font-medium">Selected Products:</p>
					<h1 class=" text-xl font-semibold">{total}</h1>
				</div>
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

							<div class="  mt-4 space-y-4  flex flex-col justify-between items-center">
								{#each iphonesImg as img}
									{#if img.category == item.category}
										<img
											src={`${img.images[Math.floor(Math.random() * img.images.length)]}`}
											class=" md:max-h-48 max-h-[7.5rem] lg:max-h-48"
											alt=""
										/>
									{/if}
								{/each}

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
			</section>

			<div class=" flex space-x-3">
				{#each Array(totalPages) as _, idx}
					<button
						on:click={() => nextLimit(idx * 10 + 2, 12)}
						class={` py-2 px-4 rounded-md ${
							Math.ceil((active - 2) / 10)  == idx ? 'bg-black-100 text-white' : ' bg-green-100 text-black-100 '
						}  font-semibold`}
					>
						{idx}
					</button>
                    
				{/each}
			</div>
		</div>
	</div>
</div>
