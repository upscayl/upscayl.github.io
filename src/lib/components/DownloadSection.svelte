<script>
	import Icon from '@iconify/svelte';
	import Input from './ui/Input.svelte';
	import Modal from './ui/Modal.svelte';
	import IconList from './ui/IconList.svelte';
	import JoinWaitlist from './JoinWaitlist.svelte';

	let showLinuxModal = false;
	let showMacModal = false;
	let showWindowsModal = false;
	let showCloudModal = false;
</script>

<div class="flex flex-col gap-20 px-4 text-slate-300 md:px-24" id="download">
	<h1 class="text-4xl font-semibold text-slate-200">Download Upscayl</h1>

	<div
		class="grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-3 xl:grid-cols-4"
	>
		<button
			class="flex h-56 w-56 flex-col items-center justify-center gap-5 rounded-2xl bg-slate-800 ring-1 ring-slate-500 transition-all duration-500 hover:scale-110 hover:bg-slate-700 md:h-64 md:w-64"
			on:click={() => (showLinuxModal = true)}
		>
			<Icon icon="ph:linux-logo" width="5rem" />
			<h5 class="text-xl font-medium">Linux</h5>
			<p class="text-sm text-slate-400">Any modern Linux distro</p>
		</button>

		<button
			class="flex h-56 w-56 flex-col items-center justify-center gap-5 rounded-2xl bg-slate-800 ring-1 ring-slate-500 transition-all duration-500 hover:scale-110 hover:bg-slate-700 md:h-64 md:w-64"
			on:click={() => (showMacModal = true)}
		>
			<Icon icon="ph:apple-logo" width="5rem" />
			<h5 class="text-xl font-medium">macOS</h5>
			<p class="text-sm text-slate-400">macOS 11+</p>
		</button>

		<button
			class="flex h-56 w-56 flex-col items-center justify-center gap-5 rounded-2xl bg-slate-800 ring-1 ring-slate-500 transition-all duration-500 hover:scale-110 hover:bg-slate-700 md:h-64 md:w-64"
			on:click={() => (showWindowsModal = true)}
		>
			<Icon icon="ph:windows-logo" width="5rem" />
			<h5 class="text-xl font-medium">Windows</h5>
			<p class="text-sm text-slate-400">Windows 8 and above</p>
		</button>

		<button
			class="flex h-56 w-56 flex-col items-center justify-center gap-5 rounded-2xl bg-slate-800 ring-1 ring-slate-500 transition-all duration-500 hover:scale-110 hover:bg-slate-700 md:h-64 md:w-64"
			on:click={() => (showCloudModal = true)}
		>
			<Icon icon="ph:devices" width="5rem" />
			<h5 class="text-xl font-medium">Cloud - Any Device</h5>
			<p class="text-sm text-slate-400">Coming Soon...</p>
		</button>
	</div>
</div>

<JoinWaitlist />

<Modal bind:showModal={showLinuxModal}>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="z-50 flex w-11/12 flex-col gap-5 rounded-xl bg-slate-800 p-4 sm:max-w-lg"
		on:click|stopPropagation
	>
		<h3 class="text-lg text-slate-300">
			Download for <span class="font-medium text-slate-100">Linux</span>
		</h3>
		<div
			class="flex max-h-72 flex-col gap-4 overflow-y-auto py-2 text-center font-medium text-slate-300 sm:max-h-96"
			id="download-links-list"
		>
			<a
				href="https://github.com/upscayl/upscayl/releases/download/v2.9.4/upscayl-2.9.4-linux.AppImage"
				target="_blank"
				rel="noreferrer noopener">AppImage (Universal Portable)</a
			>
			<a
				href="https://flathub.org/apps/org.upscayl.Upscayl"
				target="_blank"
				rel="noreferrer noopener">Flatpak (Universal)</a
			>
			<a href="https://snapcraft.io/upscayl/" target="_blank" rel="noreferrer noopener"
				>Snap Store</a
			>
			<a
				href="https://github.com/upscayl/upscayl/releases/download/v2.9.4/upscayl-2.9.4-linux.deb"
				target="_blank"
				rel="noreferrer noopener">DEB (Debian/Ubuntu based)</a
			>
			<a
				href="https://github.com/upscayl/upscayl/releases/download/v2.9.4/upscayl-2.9.4-linux.rpm"
				target="_blank"
				rel="noreferrer noopener">RPM (Fedora based)</a
			>
			<a
				href="https://github.com/upscayl/upscayl/releases/download/v2.9.4/upscayl-2.9.4-linux.zip"
				target="_blank"
				rel="noreferrer noopener">ZIP (Universal Portable)</a
			>
			<a
				href="https://aur.archlinux.org/packages/upscayl-bin"
				target="_blank"
				rel="noreferrer noopener">AUR (Arch based)</a
			>
		</div>
	</div>
</Modal>

<Modal bind:showModal={showMacModal}>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="z-50 flex w-11/12 flex-col gap-5 rounded-xl bg-slate-800 p-4 sm:max-w-lg"
		on:click|stopPropagation
	>
		<h3 class="text-lg text-slate-300">
			Download for <span class="font-medium text-slate-100">macOS</span>
		</h3>
		<div
			class="flex max-h-72 flex-col gap-4 overflow-y-auto py-2 text-center font-medium text-slate-300 sm:max-h-96"
			id="download-links-list"
		>
			<a
				href="https://apps.apple.com/us/app/upscayl/id6468265473"
				target="_blank"
				rel="noreferrer noopener"
			>
				<img src="appstore.svg" alt="" class="w-full" />
			</a>
			<a
				href="https://github.com/upscayl/upscayl/releases/download/v2.9.4/upscayl-2.9.4-mac.dmg"
				target="_blank"
				rel="noreferrer noopener">DMG</a
			>
		</div>
	</div>
</Modal>

<Modal bind:showModal={showWindowsModal}>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="z-50 flex w-11/12 flex-col gap-5 rounded-xl bg-slate-800 p-4 sm:max-w-lg"
		on:click|stopPropagation
	>
		<h3 class="text-lg text-slate-300">
			Download for <span class="font-medium text-slate-100">Windows</span>
		</h3>
		<div
			class="flex max-h-72 flex-col gap-4 overflow-y-auto py-2 text-center font-medium text-slate-300 sm:max-h-96"
			id="download-links-list"
		>
			<a
				href="https://github.com/upscayl/upscayl/releases/download/v2.9.4/upscayl-2.9.4-win.exe"
				target="_blank"
				rel="noreferrer noopener">EXE Installer</a
			>
			<!-- <a href="#" target="_blank" rel="noreferrer noopener">Microsoft Store (Coming Soon...)</a>	 -->
		</div>
	</div>
</Modal>

<Modal bind:showModal={showCloudModal}>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<JoinWaitlist />
</Modal>

<style>
	#download-links-list a {
		@apply mx-4 flex items-center justify-center gap-2 rounded-lg bg-slate-700 p-2 ring-1 ring-slate-500;
	}
</style>
