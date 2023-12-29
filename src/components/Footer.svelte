<script lang="ts">
	import logo  from '$lib/assets/logo/Frame 2.png';
	import Header from './../components/Header.svelte';
	import { MapLocationOutline, EnvelopeOutline, PhoneOutline, FacebookSolid, TwitterSolid, TailwindSolid, GithubSolid } from "flowbite-svelte-icons"
	import '../app.pcss';
	import { Label, Input, Button } from 'flowbite-svelte'
	
</script>

<footer class=" shadow-xl bottom-0  w-full bg-black-100 text-white py-12">
    <div class=" w-[90%] space-y-8 lg:space-y-0 lg:flex-row flex-col flex justify-between  mx-auto">
        <div class=" lg:w-[20%] space-y-5">
            <img src={logo} alt="">
            <p class=" font-medium text-gray-500">IJORTACS, an emerging open source access global academic journal in the field of science and technology, deals with all facets in the related fields. Its aim is to improve academic research impact through open source, for effective collaborative innovations and reshaping existing knowledge. </p>
            <p>Copyright IJORTACS</p>
        </div>
        <div class=" lg:w-[20%] space-y-5">
            <h2 class=" font-semibold">Get in Touch</h2>
            <div class=" flex space-x-3">
                <MapLocationOutline />
                <p>8819 Ohio St. South Gate,
                    CA 90280</p>
            </div>
            <div class=" flex space-x-3">
                <EnvelopeOutline />
                <p>Ourstudio@hello.com</p>
            </div>
            <div class=" flex space-x-3">
                <PhoneOutline />
                <p>+1 386-688-3295</p>
            </div>
        </div>
        <div class="lg:w-[20%] space-y-5">
            <div class=" flex space-x-6">
                <FacebookSolid size="lg" />
                <GithubSolid size="lg"/>
                <TwitterSolid size="lg"/>
                <TailwindSolid size="lg"/>
            </div>
            <p class=" text-gray-500 font-medium">Lorem ipsum dolor sit amet,
                consec tetur adipiscing elit,
                sed do eiusmod.</p>
        </div>
        <div class=" lg:w-[20%] space-y-6">
            <h1 class=" font-medium">Join Our Newsletter</h1>
            <div class=" space-y-2">
                <Label class=" text-gray-500" defaultClass=" text-gray-500 font-medium text-base" >Your Email</Label>
                <Input class="  border-black border-2 focus-within:border-blue-600 focus:border-blue-600 focus-visible:border-blue-600" type="text" placeholder="Enter your email"  />
            </div>
            <Button class=" hover:bg-blue-600 bg-black text-white font-medium" >Subscribe</Button>
        </div>
    </div>
</footer>

