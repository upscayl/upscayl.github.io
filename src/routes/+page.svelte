<script lang="ts">
	// import Counter from './Counter.svelte';
	import ring from '$lib/images/ring.png';
	import { onMount } from 'svelte';

	let sliderPosition = 50;
	let container: HTMLDivElement | null = null;

	onMount(() => {
		container = document.querySelector('#slider-container') as HTMLDivElement;
	});

	console.log(container);

	const handleSlide = (e: any) => {
		if (!container || !e.currentTarget) return;
		container.style.setProperty('--position', `${e.target.value}%`);
	};
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
		<!-- <div class="w-[30rem] rounded-xl mt-16 overflow-hidden">
			<img src={low_res} alt="low_res" class="w-full" />
		</div> -->
		<div class="relative mt-10">
			<div
				id="slider-container"
				class="grid place-content-center overflow-hidden rounded-2xl"
				style="--position: {sliderPosition}%"
			>
				<div id="image-container" class="max-w-2xl max-h-96">
					<img
						id="image-before"
						src="/low.jpg"
						alt=""
						class="h-full rounded-xl object-cover object-left absolute inset-0"
					/>
					<img
						id="image-after"
						src="/high.jpg"
						alt=""
						class="w-full h-full object-cover object-left"
					/>
				</div>
				<input
					type="range"
					min="0"
					max="100"
					value="50"
					id="slider"
					class="absolute inset-0 cursor-pointer w-full h-full opacity-0"
					on:input={handleSlide}
				/>
				<div
					id="slider-button"
					aria-hidden="true"
					class="absolute bg-white/50 backdrop-blur-lg p-5 rounded-full grid place-items-center top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
				/>
				<div
					id="slider-line"
					class="absolute inset-0 w-2 rounded-full -top-10 h-[120%] bg-white/50 backdrop-blur-lg z-10 -translate-x-1/2 pointer-events-none"
				/>
			</div>
		</div>
	</div>

	<img src={ring} alt="Ring" class="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/3 z-0" />
</section>

<style>
	section {
		background: url('/background_gradient.png') no-repeat center center fixed;
		background-size: cover;
	}

	#image-before {
		width: var(--position);
	}
	#slider-line {
		left: var(--position);
	}
	#slider-button {
		left: var(--position);
	}
</style>
