<script>
	import logo from '$lib/images/logo_small.png';
</script>

<nav class="fixed top-0 flex justify-between items-center px-20 z-50 py-4 w-full">
	<div class="flex gap-2">
		<img src={logo} alt="" class="" />
		<h5 class="text-lg font-semibold text-slate-100">Upscayl</h5>
	</div>
	<div class="text-slate-300 font-light text-sm gap-10 flex">
		<a href="">Desktop</a>
		<a href="">Cloud</a>
		<a href="">GitHub</a>
		<a href="">About</a>
	</div>
	<button
		class="bg-slate-800 hover:bg-slate-700/70 duration-500 transition-all ring-slate-500 ring-1 text-slate-300 text-sm px-3 py-2 rounded-md"
		>Download</button
	>
</nav>

<style>
	a {
		@apply transition-all duration-500;
	}
	a:hover {
		@apply text-slate-400;
	}
</style>
