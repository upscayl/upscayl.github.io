<script lang="ts">
	import Icon from '@iconify/svelte';
	import IconList from './ui/IconList.svelte';
	import Input from './ui/Input.svelte';
</script>

<section class="mt-20 flex min-h-screen w-full flex-col items-center gap-10" id="cloud">
	<h5 class="text-xs font-bold uppercase text-slate-500">Introducing Upscayl Cloud</h5>

	<div class="flex flex-col items-center gap-8">
		<h1 class="text-5xl font-semibold text-slate-200">
			Let's change the game <span class="text-3xl text-slate-400">(again)</span>
		</h1>

		<p class="max-w-2xl text-center text-xl text-slate-400">
			Free yourself from all the constraints. Upscayl is now everywhere! <br />
			No more long loading times, hardware issues or quality compromises!
		</p>

		<div class="gap- flex flex-col gap-3">
			<IconList icon="ph:globe" text="Upscayl anywhere, anytime, any device" />
			<IconList icon="ph:hard-drives" text="No GPU or hardware required" />
			<IconList icon="ph:smiley" text="Face Enhancement" />
			<IconList icon="ph:butterfly" text="10+ models to choose from" />
			<IconList icon="ph:gauge" text="5x faster than Upscayl Desktop" />
			<IconList icon="ph:video" text="Video Upscaling" />
			<IconList icon="ph:money" text="Commercial Usage" />
		</div>

		<div
			class="flex flex-col gap-8 rounded-3xl bg-gradient-to-t from-slate-800 to-transparent px-36 py-20"
			id="join-beta"
		>
			<h3 class="text-3xl font-medium text-slate-300">
				Join the beta waitlist for <u class="text-slate-100">free</u>
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
	</div>
</section>
