<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import './styles.css';
	import logo from '$lib/images/logo_small.png';
	import { onMount } from 'svelte';

	function handleAnchorClick(event: any) {
		event.preventDefault();
		const link = event.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		if (!anchor) return;
		window.scrollTo({
			top: anchor.offsetTop - 100,
			behavior: 'smooth'
		});
	}

	onMount(() => {
		const anchors = document.querySelectorAll('a[href^="#"]');
		anchors.forEach((anchor) => {
			anchor.addEventListener('click', handleAnchorClick);
		});
	});
</script>

<div class="min-h-screen w-full bg-slate-900">
	<Header />

	<main>
		<slot />
	</main>

	<footer class="mt-20 flex min-h-fit flex-col bg-slate-800 px-5 pb-4 pt-10 md:px-20">
		<div class="flex flex-col gap-5 md:flex-row md:gap-40">
			<div class="flex h-10 flex-row items-center justify-center gap-2">
				<img src={logo} alt="" />
				<h5 class="text-xl font-semibold text-slate-100">Upscayl</h5>
			</div>

			<div class="flex flex-col gap-4 p-4 text-slate-300">
				<b>Links</b>
				<div class="flex flex-col gap-2 text-sm">
					<a href="">GitHub Open Source</a>
					<a href="">Wiki</a>
				</div>
			</div>

			<div class="flex flex-col gap-4 p-4 text-slate-300">
				<b>Support</b>
				<div class="flex flex-col gap-2 text-sm">
					<a href="">FAQ</a>
					<a href="mailto:nayam.emikx@aleeas.com"
						>Email: <span class="text-slate-400">nayam.emikx@aleeas.com</span></a
					>
					<a href="">GitHub Discussion</a>
					<a href="">Telegram</a>
				</div>
			</div>
		</div>

		<hr class="mt-4 border-slate-700" />

		<div class="mt-3 flex flex-row items-center justify-center text-sm text-slate-400">
			Copyright &copy; {new Date().getFullYear()}&nbsp;
			<a href="https://upscayl.org">Upscayl</a>
		</div>

		<!-- <div class="flex flex-col gap-4 p-4 text-slate-300">
			<b>Legal</b>
			<div class="flex flex-col gap-2 text-sm">
				<a href="">Privacy Policy</a>
				<a href="">Terms of Service</a>
			</div>
		</div> -->
	</footer>
</div>

<style>
	a {
		@apply transition-all duration-500;
	}
	a:hover {
		@apply text-slate-500;
	}
</style>
