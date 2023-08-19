<script lang="ts">
	import DesktopFeatures from '$lib/components/DesktopFeatures.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import UpscaylProSection from '$lib/components/UpscaylProSection.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<img src="/background_gradient.png" class="absolute h-full w-full" />

<HeroSection />
<UpscaylProSection />
<DesktopFeatures />
