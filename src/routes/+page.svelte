<script lang="ts">
	import backgroundPhone from '$lib/assets/iphones/Iphone Image.png';
	import image1 from '$lib/assets/iphones/image 18.png';
	import image2 from '$lib/assets/iphones/image 19.png';
	import image3 from '$lib/assets/iphones/image 6.png';
	import image4 from '$lib/assets/iphones/image 7.png';
	import image5 from '$lib/assets/iphones/jbl_jr_310bt_blue 1.png';
    import person from '$lib/assets/images/pexels-andrea-piacquadio-837358.jpg'

    
    

	import {
		CashSolid,
		CartPlusAltSolid,
		HeadphonesSolid,
		DollarSolid,
		MobilePhoneSolid,
		CreditCardSolid,
		CartOutline,
		MessagesSolid,
		QuoteSolid
	} from 'flowbite-svelte-icons';
	import { goto } from '$app/navigation';

	const services = [
		{
			title: 'Quick response',
			description: 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum',
			color: '#2DBF78'
		},
		{
			title: 'Best Value',
			description: 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum',
			color: '#2DBF78'
		},
		{
			title: '24/7 Support',
			description: 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum',
			color: '#FB5850'
		}
	];

	let scrollY: number;

    let active: number = 1;
</script>

<svelte:window bind:scrollY />

<div class=" main w-full min-h-screen -z-50">
	<main
		class=" bg-gradient-to-br from-[#211C24] overflow-y-hidden to-[#211C24] w-full h-[95vh] pt-[10vh]"
	>
		<div class=" w-[80%] lg:flex mx-auto">
			<div class=" w-[90%] mx-auto">
				<div class=" flex lg:w-[85%] lg:pt-[20vh] space-y-4 flex-col items-center lg:items-start">
					<p class=" font-semibold text-2xl lg:text-3xl text-gray-600">Pro.Beyond.</p>
					<h1 class=" text-white text-7xl lg:text-8xl font-extralight text-center">
						IPhone 14 <span class=" font-bold">Pro</span>
					</h1>
					<p class=" text-xl text-center text-gray-600 font-semibold">
						Created to change everything for the better. For every one.
					</p>
					<br />
					<button on:click={() => goto('/products')}  class=" text-white py-5 border-2 rounded-md w-[50%] mt-8 border-white"
						>Shop Now</button
					>
				</div>
			</div>

			<div
				style="{`transform: translate3d(-${scrollY * 0.1}px, 0, 0); `};"
				class={` transition-all duration-200 mt-10 pl-10 lg:pl-0 lg:w-[35em] lg:h-auto`}
			>
				<img src={backgroundPhone} class=" w-full h-full" alt="" />
			</div>
		</div>
	</main>
	<section class=" w-full py-[10vh] bg-white">
		<div class=" w-[90%] text-center mx-auto">
			<h3 class=" text-lg font-semibold mb-2 text-gray-700">Best Service</h3>

			<h1 class=" font-bold text-black text-2xl">Our Service will make your life more easier</h1>
			<div class=" w-full mt-10 space-y-10 lg:space-y-0 lg:flex lg:justify-between">
				{#each services as service, index}
					<div class="flex flex-col lg:w-[32%] items-center space-y-5">
						<div class=" p-4 rounded-md shadow-md w-fit h-fit">
							{#if index == 0}
								<MessagesSolid class={` text-[#1388E5]  w-12 h-12`} />
							{:else if index == 1}
								<CashSolid class={` text-[#2DBF78]  w-12 h-12`} />
							{:else}
								<HeadphonesSolid class={` text-[#FB5850]  w-12 h-12`} />
							{/if}
						</div>
						<h3 class=" font-bold text-xl">{service.title}</h3>
						<p class=" text-gray-500">{service.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>
	<section class=" w-full z-20 lg:h-[85vh] overflow-hidden relative bg-[#E2F3FF]">
		<h1
			class=" -z-10 text-[#D9EFFF] absolute lg:-translate-y-[.2em] -translate-y-[.3em] translate-x-[.05em] lg:translate-x-[.25em] text-[40em] -rotate-45 font-bold font-poppins"
		>
			C
		</h1>
		<div class=" flex flex-col lg:flex-row z-50 w-[80%] mx-auto ">
			<div class=" lg:w-[55%] pt-[5vh] lg:pt-[20vh]">
				<h3 class=" text-lg font-semibold mb-2 text-gray-700">Testimonials</h3>

				<h1 class=" font-bold text-black text-5xl">What are they saying</h1>
                <p class=" text-[#BEB3CF] mt-4 w-[70%] font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint corrupti natus, voluptatum dolores error unde accusamus qui volup</p>
			</div>
            <div class=" lg:w-[60%] mt-4 lg:mt-0 lg:-ml-[13%] z-50 relative ">
                <div on:pointerover={() => active=0} on:pointerout={() => active=1}  class={` lg:w-[80%] relative transition-all duration-200 ${active == 0 ? '-z-10' : '-z-20'} cursor-pointer p-6 rounded-md ${active == 0 ? 'bg-[#A5DAFF]' : 'bg-white'}  shadow-2xl`}>
                    
                    <p class={` italic font-semibold ${active == 0 ? 'text-white' : 'text-[#BEB3CF]' }  leading-8 z-50`}>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est dicta mollitia neque ullam aut quibusdam nisi tempore labore dolores deleniti vel minima dolore, perspiciatis sit cumque autem laudantium architecto consequuntur!"</p>
                    <div class=" mt-5 flex space-x-5">
                        <img class=" rounded-[50%] w-[3em] h-[3em] " src={person} alt="">
                        <div>
                            <h2 class=" font-semibold text-base">Allison Bali</h2>
                            <p class=" font-semibold text-sm">President of Google</p>
                        </div>
                    </div>
                    <QuoteSolid class={` opacity-80 absolute ${active == 0 ? 'text-[#9AD2FF]' : 'text-[#E6EEF7]'}  w-[8em] h-[8em] -z-10 right-[10%] bottom-[2.5em]`} />
                </div>
                <div class=" lg:w-[80%] relative transition-all duration-200 lg:-translate-y-[5em] lg:translate-x-[5em] -z-20 cursor-pointer p-6 rounded-md bg-[#A5DAFF] shadow-2xl">
                    <p class=" italic font-semibold text-white leading-8 z-50">"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est dicta mollitia neque ullam aut quibusdam nisi tempore labore dolores deleniti vel minima dolore, perspiciatis sit cumque autem laudantium architecto consequuntur!"</p>
                    <div class=" mt-5 flex space-x-5">
                        <img class=" rounded-[50%] w-[3em] h-[3em] " src={person} alt="">
                        <div>
                            <h2 class=" font-semibold text-base">Allison Bali</h2>
                            <p class=" font-semibold text-sm">President of Google</p>
                        </div>
                    </div>
                    <QuoteSolid class=" opacity-80 absolute text-[#9AD2FF] w-[8em] h-[8em] -z-10 right-[10%] bottom-[2.5em]" />
                </div>
                <div on:pointerover={() => active=2} on:pointerout={() => active=1}  class={` lg:w-[80%] relative transition-all duration-200 ${active == 2 ? '-z-10' : '-z-30'} lg:-translate-y-[8em] lg:translate-x-[10em] cursor-pointer p-6 rounded-md ${active == 2 ? 'bg-[#A5DAFF]' : 'bg-white'}  shadow-2xl`}>
                    
                    <p class={` italic font-semibold ${active == 2 ? 'text-white' : 'text-[#BEB3CF]' }  leading-8 z-50`}>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est dicta mollitia neque ullam aut quibusdam nisi tempore labore dolores deleniti vel minima dolore, perspiciatis sit cumque autem laudantium architecto consequuntur!"</p>
                    <div class=" mt-5 flex space-x-5">
                        <img class=" rounded-[50%] w-[3em] h-[3em] " src={person} alt="">
                        <div>
                            <h2 class=" font-semibold text-base">Allison Bali</h2>
                            <p class=" font-semibold text-sm">President of Google</p>
                        </div>
                    </div>
                    <QuoteSolid class={` opacity-80 absolute ${active == 2 ? 'text-[#9AD2FF]' : 'text-[#E6EEF7]'}  w-[8em] h-[8em] -z-10 right-[10%] bottom-[2.5em]`} />
                </div>
                
            </div>
		</div>
	</section>
	<section class=" w-full relative h-screen bg-gradient-to-br from-[#2E2E2E] to-[#000000]">
		<img class=" absolute" src={image1} alt="" />
		<img class=" absolute right-0 z-40" src={image2} alt="" />
		<img class=" absolute left-[30%]" src={image3} alt="" />
		<img class=" absolute bottom-0 right-0" src={image4} alt="" />
		<img class=" absolute bottom-0" src={image5} alt="" />
		<div class=" flex flex-col h-full w-[90%] mx-auto justify-center items-center">
			<h1 class=" mb-4 text-white text-5xl font-extralight text-center">
				Big Summer <span class=" font-bold">Sales</span>
			</h1>
			<br />
			<p class=" text-xl text-center text-gray-600 font-semibold">
				Created to change everything for the better. For every one.
			</p>
			<button on:click={() => goto('/products')}  class=" text-white py-5 border-2 rounded-md w-[50%] mt-14 border-white"
				>Shop Now</button
			>
		</div>
	</section>
</div>
