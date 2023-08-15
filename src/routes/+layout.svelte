<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="bg-slate-900 w-full min-h-screen">
	<Header />

	<main>
		<slot />
	</main>

	<footer />
</div>
