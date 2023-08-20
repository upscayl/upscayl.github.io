<script>
	import Icon from '@iconify/svelte';
	import Input from './ui/Input.svelte';
</script>

<div class="flex flex-col gap-20 px-24 text-slate-300">
	<h1 class="text-4xl font-semibold text-slate-200">Download Upscayl</h1>

	<div class="grid grid-cols-3 grid-rows-1 place-items-center">
		<button
			class="flex h-64 w-64 flex-col items-center justify-center gap-5 rounded-2xl bg-slate-800 ring-1 ring-slate-500 transition-all duration-500 hover:scale-110 hover:bg-slate-700"
		>
			<Icon icon="ph:linux-logo" width="5rem" />
			<h5 class="text-xl font-medium">Linux</h5>
			<p class="text-sm text-slate-400">Any modern Linux distro</p>
		</button>

		<button
			class="flex h-64 w-64 flex-col items-center justify-center gap-5 rounded-2xl bg-slate-800 ring-1 ring-slate-500 transition-all duration-500 hover:scale-110 hover:bg-slate-700"
		>
			<Icon icon="ph:apple-logo" width="5rem" />
			<h5 class="text-xl font-medium">macOS</h5>
			<p class="text-sm text-slate-400">macOS 11+</p>
		</button>

		<button
			class="flex h-64 w-64 flex-col items-center justify-center gap-5 rounded-2xl bg-slate-800 ring-1 ring-slate-500 transition-all duration-500 hover:scale-110 hover:bg-slate-700"
		>
			<Icon icon="ph:windows-logo" width="5rem" />
			<h5 class="text-xl font-medium">Windows</h5>
			<p class="text-sm text-slate-400">Windows 8 and above</p>
		</button>
	</div>
</div>

<div
	class="mx-auto mt-32 flex max-w-3xl flex-col gap-8 rounded-3xl bg-slate-800 px-36 py-20"
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
