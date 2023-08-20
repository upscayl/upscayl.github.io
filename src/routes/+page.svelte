<script lang="ts">
	import DesktopFeatures from '$lib/components/DesktopFeatures.svelte';
	import DownloadSection from '$lib/components/DownloadSection.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import UpscaylProSection from '$lib/components/UpscaylProSection.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
	<meta name="color-scheme" content="dark" />
</svelte:head>


<HeroSection />
<UpscaylProSection />
<DesktopFeatures />
<DownloadSection />
