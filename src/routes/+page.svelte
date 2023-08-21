<script lang="ts">
	import DesktopFeatures from '$lib/components/DesktopFeatures.svelte';
	import DownloadSection from '$lib/components/DownloadSection.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import UpscaylCloudSection from '$lib/components/UpscaylCloudSection.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
	<meta name="color-scheme" content="dark" />
</svelte:head>

<img src="/background_gradient.png" class="absolute h-full w-full" alt="background gradient" />

<HeroSection />
<UpscaylCloudSection />
<DesktopFeatures />
<DownloadSection />
