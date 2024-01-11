<script lang="ts">
	import { onMount } from 'svelte';
    import type { PageData } from './$types';
	import { goto, invalidateAll } from '$app/navigation';
    
    export let data: PageData;

    import { reveal } from 'svelte-reveal';

	import { navigating } from '$app/stores';

	import Loader from '../../components/Loader.svelte';
	import { Button } from 'flowbite-svelte';

    onMount(() => {
		const interval = setInterval(() => {
			invalidateAll();
		}, 100);

		return () => {
			clearInterval(interval);
		};
	});
</script>

{#if $navigating}
    <div >
        <Loader />
    </div>
    {:else}
    <div   class=" w-full h-screen flex items-center flex-col space-y-4 justify-center">
        <h1 class=" text-xl font-semibold">Signed Out</h1>
        <Button href="/" class=" bg-blue-500 rounded-md font-medium text-lg" >Return to Homepage</Button>
    </div>
{/if}

