<script lang="ts">
	import logo  from '$lib/assets/logo/Frame 2.png';
	import Footer from '../components/Footer.svelte';
	import { MapLocationOutline, EnvelopeOutline, PhoneOutline, FacebookSolid, TwitterSolid, TailwindSolid, GithubSolid } from "flowbite-svelte-icons"
	import '../app.pcss';
	import { Label, Input, Button } from 'flowbite-svelte'
	import Header from '../components/Header.svelte';
	import type { LayoutData } from './$types';

	
	export let data: LayoutData;

	
	let auth: boolean = data.auth;

	
	
</script>

<div class=" font-quick flex flex-col   ">
	<Header auth={auth}  />

	<div class=" z-50">
		<slot />
	</div>
	

	<Footer />
	
	
</div>
