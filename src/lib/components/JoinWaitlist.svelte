<script lang="ts">
	import { doc, setDoc } from 'firebase/firestore';
	import Input from './ui/Input.svelte';
	import { waitlistCollection } from '$lib/utils/firebase';

	let name: string;
	let email: string;

	const nameRegex = /^[A-Za-z\s.'-]+$/;
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
</script>

<div
	class="mx-4 mt-20 flex max-w-2xl flex-col gap-8 rounded-3xl bg-slate-800 px-4 py-20 sm:mx-auto md:px-28"
	id="join-beta"
>
	<h3 class="text-center text-3xl font-medium text-slate-300">
		Join Upscayl Cloud beta for <u class="text-slate-100">free</u>
	</h3>

	<div class="flex flex-col gap-5">
		<div class="flex flex-col gap-4">
			<Input placeholder="Your Name" />
			<Input placeholder="Your Email" />
		</div>

		<button
			class="ring-ring-500 rounded-full bg-green-600 px-8 py-3 font-medium text-green-200 ring-1 ring-green-500 transition-all duration-500 hover:bg-green-500"
			on:click={async () => {
				if (name && email && nameRegex.test(name) && emailRegex.test(email)) {
					try {
						const result = await setDoc(doc(waitlistCollection, email), {
							name,
							email
						});
					} catch (error) {
						alert('Error joining the waitlist. Please try again later...');
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
