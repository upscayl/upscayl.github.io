<script>
	import IconList from './ui/IconList.svelte';
	import Input from './ui/Input.svelte';
</script>

<div class="relative mt-40 flex min-h-screen w-full flex-row overflow-hidden px-24">
	<div class="flex flex-col gap-8 py-20">
		<h3 class="text-4xl font-semibold leading-snug text-slate-300">
			Good is not good enough. <br /><span class="text-slate-50">Make it better!</span>
		</h3>
		<p class="max-w-lg text-xl font-light text-slate-300">
			With state of the art AI, Upscayl helps you turn low resolution images into high resolution.
			Crisp and sharp!
		</p>

		<div class="flex flex-col gap-4">
			<IconList icon="ph:wifi-slash" text="No internet required" />
			<IconList icon="ph:list-checks" text="5+ Modes" />
			<IconList icon="ph:paint-brush" text="Fully Customizable" />
			<IconList icon="ph:leaf" text="Free and Open Source" />
		</div>
	</div>

	<div class="absolute -right-1/4">
		<img src="/upscayl-desktop.png" alt="Upscayl Desktop Screenshot" class="ml-52" />
	</div>
</div>

<div
	class="mx-auto flex max-w-3xl flex-col gap-8 rounded-3xl bg-slate-800 px-36 py-20"
	id="join-beta"
>
	<h3 class="text-center text-3xl font-medium text-slate-300">
		Join Upscayl Pro beta for <u class="text-slate-100">free</u>
	</h3>

	<div class="flex flex-col gap-5">
		<div class="flex flex-col gap-4">
			<Input placeholder="Your Name" />
			<Input placeholder="Your Email" />
		</div>

		<button
			class="ring-ring-500 rounded-full bg-green-600 px-8 py-3 font-medium text-green-200 ring-1 ring-green-500 transition-all duration-500 hover:bg-green-500"
		>
			Join the waitlist
		</button>
	</div>
</div>
