<script lang="ts">
	import DesktopFeatures from '$lib/components/DesktopFeatures.svelte';
	import DownloadSection from '$lib/components/DownloadSection.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import UpscaylCloudSection from '$lib/components/UpscaylCloudSection.svelte';
</script>

<svelte:head>
	<title>Upscayl - AI Image Upscaler</title>
	<meta name="color-scheme" content="dark" />

	<meta http-equiv="cache-control" content="no-cache" />
	<meta http-equiv="expires" content="0" />
	<meta http-equiv="pragma" content="no-cache" />

	<link rel="icon" type="image/png" href="/logo.png" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://upscayl.org" />
	<meta name="twitter:title" content="Upscayl - Free and Open Source AI Image Upscaler" />
	<meta
		name="twitter:description"
		content="Free and Open Source AI Image Upscaler for Linux, MacOS and Windows"
	/>
	<meta name="twitter:image" content="https://upscayl.org/og-image.png" />

	<meta property="og:type" content="website" />
	<meta property="og:title" content="Upscayl - Free and Open Source AI Image Upscaler" />
	<meta name="description" content="Upscayl - Free and Open Source AI Image Upscaler" />
	<meta property="og:site_name" content="Upscayl" />
	<meta property="og:url" content="https://upscayl.org" />
	<meta property="og:image" content="https://upscayl.org/og-image.png" />
	<script src="https://cdn.counter.dev/script.js" data-id="6de04f75-c315-4dd3-a92e-dcc761fe4ebc" data-utcoffset="6" />
</svelte:head>

<img src="/background_gradient.png" class="absolute h-full w-full" alt="background gradient" />

<HeroSection />
<UpscaylCloudSection />
<DesktopFeatures />
<DownloadSection />
