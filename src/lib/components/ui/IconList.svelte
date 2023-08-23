<script>
	import Icon from '@iconify/svelte';
	export let icon = 'ph:arrow-right';
	export let width = '20px';
	export let text = '';
</script>

<div class="flex flex-row items-center gap-5 font-light text-slate-100">
	<div class="flex items-center justify-center rounded-lg bg-slate-800 p-2 ring-1 ring-slate-500">
		<Icon {icon} {width} />
	</div>

	<p>{text}</p>
</div>
