<script lang="ts">
	import logo from '$lib/images/logo_small.png';
	import Icon from '@iconify/svelte';
</script>

<nav
	class="fixed top-0 z-50 flex w-full items-center justify-between px-2 py-4 backdrop-blur-3xl md:px-20"
>
	<div class="flex gap-2">
		<img src={logo} alt="" class="" />
		<h5 class="hidden text-lg font-semibold text-slate-100 md:block">Upscayl</h5>
	</div>
	<div class="hidden gap-10 text-sm text-slate-300 md:flex">
		<a href="#cloud">Cloud</a>
		<a href="#desktop">Desktop</a>
		<a
			href="https://github.com/upscayl"
			target="_blank"
			rel="noopener noreferrer"
			class="flex items-center justify-center gap-2"
		>
			<Icon icon="ph:github-logo-fill" width={20} /> GitHub Open Source
		</a>
	</div>
	<div class="flex items-center justify-center gap-6 text-sm text-slate-300">
		<a
			href="#download"
			class="rounded-full bg-slate-800 px-3 py-2 text-sm font-medium text-slate-300 ring-1 ring-slate-500 transition-all duration-500 hover:bg-slate-700/70"
			>Download</a
		>
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
