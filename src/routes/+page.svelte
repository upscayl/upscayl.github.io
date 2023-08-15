<script>
	// import Counter from './Counter.svelte';
	import ring from '$lib/images/ring.png';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="w-full h-screen">
	<div class="flex flex-col justify-center items-center gap-4 pt-80 relative z-10">
		<h1 class="text-slate-400 text-6xl font-extralight">
			From <span class="font-medium text-slate-200">Science Fiction</span> to
			<span class="font-medium text-slate-200">Reality</span>
		</h1>
		<h4 class="text-slate-400 text-2xl font-light">
			Supercharging your images with <span class="underline">AI</span>
		</h4>
	</div>
	<img src={ring} alt="Ring" class="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/3 z-0" />
</section>

<style>
	section {
		background: url('/background_gradient.png') no-repeat center center fixed;
		background-size: cover;
	}
</style>
