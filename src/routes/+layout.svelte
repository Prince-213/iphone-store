<script lang="ts">
	import logo from '$lib/assets/logo/Frame 2.png';
	import Footer from '../components/Footer.svelte';
	import {
		MapLocationOutline,
		EnvelopeOutline,
		PhoneOutline,
		FacebookSolid,
		TwitterSolid,
		TailwindSolid,
		GithubSolid
	} from 'flowbite-svelte-icons';
	import '../app.pcss';
	import { Label, Input, Button } from 'flowbite-svelte';
	import Header from '../components/Header.svelte';
	import type { LayoutData } from './$types';
	import Loader from '../components/Loader.svelte';

	import { afterUpdate } from 'svelte';

	let show = false;

	afterUpdate(() => {
		show = true;
	});

	export let data: LayoutData;

	let auth: boolean = false;
	let name: string = '';
	let email: string = '';

	$: auth = data.data;
	$: name = data.name;
	$: email = data.email;
	$: avatar = data.avatar;
	$: wishlist = data.favourite;
	$: cart = data.cart
</script>

{#if show}
	<div class=" font-quick flex flex-col">
		<Header {auth} userName={name} userEmail={email} userAvatar={avatar} wishlist={wishlist} cart={cart} />

		<div class=" z-50">
			<slot />
		</div>

		<Footer />
	</div>
{/if}
