<script>
	import IconList from './ui/IconList.svelte';
</script>

<div class="md:mt-40 flex min-h-screen w-full flex-row items-center overflow-hidden px-24" id="desktop">
	<div class="flex flex-col pr-4 z-10 w-full bg-gradient-to-l from-[rgba(158,158,158,0.5)] backdrop-blur-sm rounded-xl to-transparent gap-8 py-20 basis-1/2">
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
	<div class="absolute z-0 -right-[145%] md:-right-[100%] lg:-right-[50%] xl:-right-[30%] 2xl:-right-[20%]">
		<img src="/upscayl-desktop.png" alt="Upscayl Desktop Screenshot" class="object-contain z-0" />
	</div>
</div>
