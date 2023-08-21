<script lang="ts">
	import { fade } from 'svelte/transition';
	import ring from '$lib/images/ring.png';
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';

	let sliderPosition = 50;
	let container: HTMLDivElement | null = null;
	onMount(() => {
		container = document.querySelector('#slider-container') as HTMLDivElement;
	});
	const handleSlide = (e: any) => {
		if (!container || !e.currentTarget) return;
		container.style.setProperty('--position', `${e.target.value}%`);
	};
</script>

<section class="min-h-screen w-full overflow-hidden">
	<div
		class="relative z-10 flex flex-col items-center justify-center gap-4 px-4 pt-32 sm:px-0 md:pt-28"
	>
		<a
			href="#cloud"
			class="flex items-center justify-center gap-2 rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300 ring-1 ring-slate-500 transition-all duration-500 hover:bg-slate-700 sm:text-base"
			in:fade={{
				duration: 500
			}}
		>
			<img src="/dot.svg" />
			Introducing Upscayl Cloud <Icon icon="ph:arrow-right" width="16px" />
		</a>
		<h1
			class="mt-16 text-5xl font-extralight text-slate-400 sm:text-center md:text-6xl"
			in:fade={{
				duration: 500,
				delay: 300
			}}
		>
			From <span class="font-medium text-slate-200">Science Fiction</span> to
			<span class="font-medium text-slate-200">Reality</span>
		</h1>
		<h4
			class="text-xl font-light text-slate-400 sm:text-2xl"
			in:fade={{
				duration: 500,
				delay: 600
			}}
		>
			Supercharging your images with <span class="underline">AI</span>
		</h4>
		<!-- <div class="w-[30rem] rounded-xl mt-16 overflow-hidden">
			<img src={low_res} alt="low_res" class="w-full" />
		</div> -->
		<div
			class="relative mt-10"
			in:fade={{
				duration: 500,
				delay: 900
			}}
		>
			<div
				id="slider-container"
				class="grid place-content-center overflow-hidden rounded-2xl"
				style="--position: {sliderPosition}%"
			>
				<div id="image-container" class="max-h-96 max-w-2xl">
					<img
						id="image-before"
						src="/low.jpg"
						alt=""
						class="absolute inset-0 h-full rounded-xl object-cover object-left"
					/>
					<img
						id="image-after"
						src="/high.jpg"
						alt=""
						class="h-full w-full object-cover object-left"
					/>
				</div>
				<input
					type="range"
					min="01"
					max="99"
					value="50"
					id="slider"
					class="absolute inset-0 h-full w-full cursor-pointer opacity-0"
					on:input={handleSlide}
				/>
				<div
					id="slider-button"
					aria-hidden="true"
					class="pointer-events-none absolute top-1/2 z-50 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/50 p-3 backdrop-blur-xl"
				>
					<Icon icon="carbon:drag-horizontal" width="24" />
				</div>
				<div
					id="slider-line"
					class="pointer-events-none absolute inset-0 z-10 w-1 -translate-x-1/2 scale-125 rounded-full bg-white/50 backdrop-blur-xl"
				/>
			</div>
		</div>
	</div>

	<img src={ring} alt="Ring" class="absolute left-1/2 top-32 z-0 -translate-x-1/2 md:top-28" />

	<div
		class="mt-20 w-full"
		in:fade={{
			duration: 500,
			delay: 1200
		}}
	>
		<p class="text-center font-bold text-slate-500">AS SEEN ON</p>

		<div class="relative whitespace-nowrap p-6" id="logos-container">
			<div id="logos-slide" class="inline-block">
				<img
					src="/muo_logo.svg"
					alt="Make Use Of Logo"
					class="max-h-10 opacity-50 grayscale invert"
				/>
				<img
					src="https://itsfoss.com/content/images/2023/01/itsfoss-logo.png"
					alt="It's FOSS Logo"
					class="max-h-10 opacity-50 grayscale invert"
				/>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/5/51/GIGAZINE_logo.svg"
					alt="Gigazine Logo"
					class="max-h-10 opacity-50 grayscale invert"
				/>
				<img
					src="/htg_logo.png"
					alt="How To Geek Logo"
					class="max-h-10 opacity-50 grayscale invert"
				/>
				<img
					src="https://ambcrypto.com/blog/wp-content/uploads/2023/03/AMB-Logo.png"
					alt="AMB Crypto Logo"
					class="max-h-10 opacity-50 grayscale invert"
				/>
				<img
					src="https://cdn.nerdschalk.com/wp-content/uploads/2022/09/cropped-square-20-sept-orange-logo-nerdschalk-2-1-1.png"
					alt="NerdsChalk Logo"
					class="max-h-10 opacity-50 grayscale invert"
				/>
				<img
					src="https://fosspost.org/wp-content/uploads/2020/07/cropped-fosspost-1.png"
					alt="Foss Post Logo"
					class="max-h-10 opacity-50 grayscale invert"
				/>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Y_Combinator_logo.svg"
					alt="Hacker News Logo"
					class="max-h-10 opacity-50 grayscale invert"
				/>
			</div>
			<div id="logos-slide" class="inline-block">
				<img
					src="/muo_logo.svg"
					alt="Make Use Of Logo"
					class="max-h-10 opacity-50 grayscale invert"
				/>
				<img
					src="https://itsfoss.com/content/images/2023/01/itsfoss-logo.png"
					alt="It's FOSS Logo"
					class="max-h-10 opacity-50 grayscale invert"
				/>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/5/51/GIGAZINE_logo.svg"
					alt="Gigazine Logo"
					class="max-h-10 opacity-50 grayscale invert"
				/>
				<img
					src="/htg_logo.png"
					alt="How To Geek Logo"
					class="max-h-10 opacity-50 grayscale invert"
				/>
				<img
					src="https://ambcrypto.com/blog/wp-content/uploads/2023/03/AMB-Logo.png"
					alt="AMB Crypto Logo"
					class="max-h-10 opacity-50 grayscale invert"
				/>
				<img
					src="https://cdn.nerdschalk.com/wp-content/uploads/2022/09/cropped-square-20-sept-orange-logo-nerdschalk-2-1-1.png"
					alt="NerdsChalk Logo"
					class="max-h-10 opacity-50 grayscale invert"
				/>
				<img
					src="https://fosspost.org/wp-content/uploads/2020/07/cropped-fosspost-1.png"
					alt="Foss Post Logo"
					class="max-h-10 opacity-50 grayscale invert"
				/>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Y_Combinator_logo.svg"
					alt="Hacker News Logo"
					class="max-h-10 opacity-50 grayscale invert"
				/>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		/* background: url('/background_gradient.png'); */
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
	@keyframes slide {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}
	#logos-slide img {
		display: inline-block;
		padding: 0 3rem;
	}
	#logos-slide {
		animation: slide 15s linear infinite;
		white-space: nowrap;
	}
</style>
