<script>
	import Header from '$lib/components/Header.svelte';
	import './styles.css';
</script>

<div class="min-h-screen w-full bg-slate-900">
	<Header />

	<main>
		<slot />
	</main>

	<footer />
</div>
