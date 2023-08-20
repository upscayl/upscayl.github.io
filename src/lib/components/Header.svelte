<script lang="ts">
	import logo from '$lib/images/logo_small.png';
	import Icon from '@iconify/svelte';
</script>

<nav class="fixed top-0 z-50 gap-2 flex w-full items-center justify-between px-6 md:px-20 py-4 backdrop-blur-3xl">
	<div class="flex gap-2">
		<img src={logo} alt="" class="" />
		<h5 class="text-lg font-semibold text-slate-100">Upscayl</h5>
	</div>
	<div class="flex justify-evenly w-full md:w-auto md:gap-10 text-sm text-slate-300">
		<a href="#cloud" class="flex flex-row gap-2"><Icon icon="ph:cloud-fill" width={20} /><span class="hidden md:flex">Cloud</span></a>
		<a href="#desktop" class="flex flex-row gap-2"><Icon icon="ph:desktop-fill" width={20} /><span class="hidden md:flex">Desktop</span></a>
		<a
			href="https://github.com/upscayl"
			target="_blank"
			rel="noopener noreferrer"
			class="flex items-center justify-center gap-2"
		>
			<Icon icon="ph:github-logo-fill" width={20} /><span class="hidden md:flex"> GitHub Open Source</span>
		</a>
	</div>
	<div class="flex items-center justify-center gap-6 text-sm text-slate-300">
		<a
			href="#download"
			class="rounded-full flex flex-row gap-2 bg-slate-800 px-3 py-2 text-sm font-medium text-slate-300 ring-1 ring-slate-500 transition-all duration-500 hover:bg-slate-700/70"
			>
			<Icon icon="ph:download-fill" width={20} /><span class="hidden md:flex">Download</span>
		</a>
	</div>
</nav>

<style>
	a {
		@apply transition-all duration-500;
	}
	a:hover {
		@apply text-slate-400;
	}
</style>
