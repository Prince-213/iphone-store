<script lang=ts>
	import { goto } from "$app/navigation";
	import { Radio, Badge, Helper } from "flowbite-svelte";
	import { PenSolid, CloseSolid, PlusSolid } from "flowbite-svelte-icons";
    import { reveal } from 'svelte-reveal'
	import Loader from "../../../components/Loader.svelte";
    import { navigating } from "$app/stores";
    let group3 = 2
</script>

{#if $navigating}
	<div use:reveal={{ transition: 'fade', threshold: 0.1 }}>
		<Loader />
	</div>
{:else}
	<div  class=" w-full min-h-screen">
		<div  use:reveal={{ transition: 'slide', threshold: 0.2, duration: 500 }}  class=" lg:w-[80%] w-[95%] flex flex-col mx-auto py-[10vh] mt-[48px]">
            <h1 class=" font-semibold text-xl ">Shipment Method</h1>
            <ul class=" py-8 w-full space-y-5">
                <li class="rounded-md p-6 flex items-center justify-between border-[4px] border-[#f6f6f6] hover:bg-gray-100 dark:hover:bg-gray-600">
                    <div>
                        <Radio class=" " color="green" name="group3" bind:group={group3} value={1}><div class=" ml-2 flex items-center space-x-6 lg:space-x-12">
                            <p class=" text-lg font-semibold">Free</p>
                            <p class=" font-medium text-sm max-w-[80%] lg:max-w-full lg:text-lg">Pick up your order from our office</p>						
                        </div></Radio>
                        
                    </div>
                    <div class=" flex items-center ">
                        <p class=" font-medium text-sm lg:text-lg">17 Oct, 2023</p>	
                    </div>
                </li>
                <li class="rounded-md p-6 flex items-center justify-between border-[4px] border-[#f6f6f6] hover:bg-gray-100 dark:hover:bg-gray-600">
                    <div>
                        <Radio class=" " color="green" name="group3" bind:group={group3} value={2}><div class=" ml-2 flex items-center space-x-6 lg:space-x-12">
                            <p class=" text-lg font-semibold">$8.90</p>
                            <p class=" font-medium text-sm max-w-[80%] lg:max-w-full lg:text-lg">Get your order delivered to your location</p>						
                        </div></Radio>
                        
                    </div>
                    <div class=" flex items-center">
                        <p class=" font-medium text-sm lg:text-lg">17 Oct, 2023</p>	
                    </div>
                </li>
            </ul>
            
            <div class=" w-full flex flex-row mt-10 justify-center lg:justify-end">
                <div class=" lg:w-[30%] w-[70%] flex items-center space-x-5">
                    <button on:click={() => goto('/payment')}  class=" py-5  font-medium w-1/2 border-2 border-black-100 rounded-md">
                        Back
                    </button>
                    <button on:click={() => goto('/payment/credit')}  class=" py-5 bg-black-100 text-white font-medium w-1/2 border-2 border-black-100 rounded-md">
                        Next
                    </button>
                </div>
            </div>
            
        </div>
	</div>
{/if}





<style>

</style>