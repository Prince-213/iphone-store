<script lang="ts">
	import { enhance } from '$app/forms';
	import { Checkbox, Input, Spinner } from 'flowbite-svelte';

	import { CheckCircleOutline, CheckCircleSolid, CloseCircleSolid } from 'flowbite-svelte-icons';

	import { generateFromEmail, generateUsername } from 'unique-username-generator';

	import { Angry } from 'lucide-svelte';

	export let data;

	import { reveal } from 'svelte-reveal';

	import { navigating } from '$app/stores';

	import Loader from '../../../components/Loader.svelte';

	export let form;

	let sending = false;

	let open = false;
	let counter = 6;

	function trigger() {
		open = true;
	}

	import {
		UserOutline,
		UserCircleOutline,
		EnvelopeOutline,
		LockOutline,
		BriefcaseOutline
	} from 'flowbite-svelte-icons';
	import { invalidateAll } from '$app/navigation';

	export const snapshot = {
		capture: () => {
			return formData;
		},
		restore: (data) => {
			formData = data;
		}
	};

	let avatar: any, fileinput: HTMLInputElement;

	const onFileSelected = (e: Event & { currentTarget: EventTarget & HTMLInputElement }) => {
		let image: any = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			avatar = e.target == null ? '' : e.target.result;
		};

		console.log(fileinput);
	};

	type final = {
		full_name: string;
		email: string;
		password: string;
		avatar: any;
	};

	let formData: final = {
		full_name: '',
		email: '',
		password: '',
		avatar: ''
	};
</script>

<svelte:head>
	<title>SIGN UP</title>
</svelte:head>

{#if $navigating}
	<div use:reveal={{ transition: 'fade' }}>
		<Loader />
	</div>
{:else}
	<div use:reveal={{ transition: 'fade', opacity: 1 }}  class=" relative w-full py-[10vh] flex items-center justify-center font-poppins">
		<form
			method="post"
			action="?/register"
			use:enhance={() => {
				sending = true;
				return ({ update }) => {
					update().finally(async () => {
						sending = false;
						// Optionally if you'd like to reload the data for the current page after form submission.
						// This is the default behavior for use:enhance.
						await invalidateAll();
					});
				};
			}}
			class=" lg:w-[35%] bg-white border-2 shadow-md shadow-gray-300 rounded-2xl p-10"
		>
			<h2 class=" ml-3 mb-10 font-medium text-2xl">Create An Account</h2>

			<div class=" space-y-10">
				<div
					class=" flex py-1 items-center space-x-3 border-l-0 border-t-0 ml-3 border-r-0 border-b-2 border-[#E2E4E5]"
				>
					<UserOutline size="lg" class=" text-gray-400" />
					<input
						type="text"
						name="full_name"
						bind:value={formData.full_name}
						placeholder="Enter name"
						class=" focus-within:outline-none box-in outline-none focus-within:border-none focus:border-none focus:outline-transparent w-full border-none"
					/>
				</div>

				<div
					class=" flex py-1 items-center space-x-3 border-l-0 border-t-0 ml-3 border-r-0 border-b-2 border-[#E2E4E5]"
				>
					<EnvelopeOutline size="lg" class=" text-gray-400" />
					<input
						type="email"
						name="email"
						bind:value={formData.email}
						placeholder="Enter email"
						class=" focus-within:outline-none box-in outline-none focus-within:border-none focus:border-none focus:outline-transparent w-full border-none"
					/>
				</div>

				<div
					class=" flex py-1 items-center space-x-3 border-l-0 border-t-0 ml-3 border-r-0 border-b-2 border-[#E2E4E5]"
				>
					<LockOutline size="lg" class=" text-gray-400" />
					<input
						type="password"
						name="password"
						bind:value={formData.password}
						placeholder="Enter password"
						class=" focus-within:outline-none box-in outline-none focus-within:border-none focus:border-none focus:outline-transparent w-full border-none"
					/>
				</div>

				<div class=" flex items-center space-x-4">
					<Checkbox color="blue" required />
					<p class=" font-medium">I accept the Terms of Use and Privacy Policy</p>
				</div>

				<div class="flex items-center space-x-4">
					{#if avatar}
						<img class="avatar w-16 h-16 rounded-full" src={avatar} alt="d" />
					{:else}
						<UserCircleOutline strokeWidth="1.3" class=" w-14 h-14" />
					{/if}

					<button
						class=" bg-black-100 text-white font-medium p-4 rounded-md"
						on:click={() => {
							fileinput.click();
						}}
						type="button"
					>
						Choose Image
					</button>
					<input
						style="display:none"
						name="avatar"
						type="file"
						accept=".jpg, .jpeg, .png"
						on:change={(e) => onFileSelected(e)}
						bind:this={fileinput}
					/>
				</div>
				<button
					type="submit"
					class=" py-3 flex items-center space-x-5 px-8 border-[#BBBFC1] border-2 rounded-md hover:font-medium transition-all duration-100"
				>
					<p>Submit</p>
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
					Already have an account? <a href="login" class=" text-blue-600">Login</a>
				</p>
			</div>
		</form>
	</div>
{/if}
