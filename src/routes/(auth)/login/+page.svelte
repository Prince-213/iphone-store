<script lang="ts">
	import { enhance } from '$app/forms';
	import { Spinner } from 'flowbite-svelte';
	import { CheckCircleOutline, CloseCircleSolid } from 'flowbite-svelte-icons';
	import { page } from '$app/stores';
	import { goto, invalidateAll } from '$app/navigation';

	export let data;

	export let form;

	let sending = false;

	$: redirectTo = $page.url.searchParams.get('redirectTo') || '/';
	import { reveal } from 'svelte-reveal';

	import { navigating } from '$app/stores';

	import Loader from '../../../components/Loader.svelte';

	export const snapshot = {
		capture: () => {
			return formData;
		},
		restore: (data) => {
			formData = data;
		}
	};

	type final = {
		email: string;
		password: string;
	};

	let formData: final = {
		email: '',
		password: ''
	};

	import {
		UserOutline,
		EnvelopeOutline,
		LockOutline,
		BriefcaseOutline
	} from 'flowbite-svelte-icons';
	import { onMount } from 'svelte';

	onMount(() => {
		console.log($page.url.pathname);
		console.log(redirectTo);
	});
</script>

{#if $navigating}
	<div use:reveal={{ transition: 'fade' }}>
		<Loader />
	</div>
{:else}
	<div use:reveal={{ transition: 'fade', opacity: 1 }}  class=" w-full pt-[15vh] min-h-screen flex justify-center font-poppins">
		<div class=" lg:w-[35%] h-fit bg-white border-2 shadow-md shadow-gray-300 rounded-2xl p-10">
			<h2 class=" ml-3 mb-10 font-medium text-2xl">Log In</h2>

			<form
				use:enhance={() => {
					sending = true;
					return ({ update, result }) => {
						update().finally(async () => {
							sending = false;
							// Optionally if you'd like to reload the data for the current page after form submission.
							// This is the default behavior for use:enhance.

							if (result.type === 'success') {
								goto(redirectTo);
							}
						});
					};
				}}
				method="post"
				action="?/login"
				class=" space-y-10"
			>
				<div
					class=" flex py-1 items-center space-x-3 border-l-0 border-t-0 ml-3 border-r-0 border-b-2 border-[#E2E4E5]"
				>
					<EnvelopeOutline size="lg" class=" text-gray-400" />
					<input
						type="email"
						placeholder="Enter email"
						name="email"
						bind:value={formData.email}
						class=" focus-within:outline-none box-in outline-none focus-within:border-none focus:border-none focus:outline-transparent w-full border-none"
					/>
				</div>

				<div
					class=" flex py-1 items-center space-x-3 border-l-0 border-t-0 ml-3 border-r-0 border-b-2 border-[#E2E4E5]"
				>
					<LockOutline size="lg" class=" text-gray-400" />
					<input
						type="password"
						placeholder="Enter password"
						name="password"
						bind:value={formData.password}
						class=" focus-within:outline-none box-in outline-none focus-within:border-none focus:border-none focus:outline-transparent w-full border-none"
					/>
				</div>

				<button
					type="submit"
					class=" py-3 lg:mx-auto w-fit flex items-center space-x-5 px-8 border-[#BBBFC1] border-2 rounded-md hover:font-medium transition-all duration-100"
				>
					<p>Log In</p>
					{#if sending}
						<Spinner currentColor="black" class={` w-6 h-6 `} currentFill="white" />
					{:else if form}
						{#if form.error}
							<CloseCircleSolid class=" text-red-500" />
						{:else}
							<CheckCircleOutline class=" text-emerald-500" />
						{/if}
					{:else}{/if}
				</button>

				<p class=" space-x-2">
					Don't have an account? <a href="signup" class=" text-blue-600">Register</a>
				</p>
			</form>
		</div>
	</div>
{/if}
