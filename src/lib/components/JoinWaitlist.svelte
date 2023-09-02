<script lang="ts">
	import { doc, setDoc } from 'firebase/firestore';
	import Input from './ui/Input.svelte';
	import { waitlistCollection } from '$lib/utils/firebase';

	let name = '';
	let email = '';

	const nameRegex = /^[A-Za-z\s.'-]+$/;
	const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
</script>

<div
	class="mx-4 mt-20 flex max-w-2xl flex-col gap-8 rounded-3xl bg-slate-800 px-4 py-20 sm:mx-auto md:px-28"
	id="join-beta"
>
	<h3 class="text-center text-3xl font-medium text-slate-300">
		Join the beta waitlist for <u class="text-slate-100">free</u>
	</h3>

	<div class="flex flex-col gap-5">
		<div class="flex flex-col gap-4">
			<Input placeholder="Your Name" bind:value={name} type="name" />
			<Input placeholder="Your Email" bind:value={email} type="email" />
		</div>

		<button
			class="ring-ring-500 rounded-full bg-green-600 px-8 py-3 font-medium text-green-200 ring-1 ring-green-500 transition-all duration-500 hover:bg-green-500"
			on:click={async () => {
				console.log('name', name);
				console.log('email', email);
				console.log('nameRegex.test(name)', nameRegex.test(name));
				console.log('emailRegex.test(email)', emailRegex.test(email));
				if (name && email && nameRegex.test(name) && emailRegex.test(email)) {
					try {
						const result = await setDoc(doc(waitlistCollection, email), {
							name,
							email
						});
					} catch (error) {
						alert(
							`Thank you ${name}! It seems that your email has already been registered :D If that's not the case, please try again.`
						);
						return;
					}
					alert(
						'Thank you for joining the waitlist! We will notify you when Upscayl Cloud is ready for you.'
					);
				} else {
					alert('Please fill in all the fields correctly.');
				}
			}}
		>
			Join the waitlist
		</button>
	</div>
</div>
