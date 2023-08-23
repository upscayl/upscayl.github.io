<script lang="ts">
	import { fade } from 'svelte/transition';

	export let showModal: boolean; // boolean
</script>

{#if showModal}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		in:fade
		out:fade
		on:click={() => (showModal = false)}
		class="fixed top-0 z-40 flex h-screen w-screen items-center justify-center overflow-hidden bg-black/50 backdrop-blur-xl"
	>
		<slot />
	</div>
{/if}

<style>
</style>
