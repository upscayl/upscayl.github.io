<script lang="ts">
	export let value = '';
	export let type = 'text';
	export let placeholder = 'Type here...';

	function typeAction(node: any) {
		node.type = type;
	}
</script>

<input
	class="rounded-full bg-slate-700 px-4 py-2 text-center text-base font-light text-slate-200 ring-1 ring-slate-500 transition-all duration-500 placeholder:font-light hover:ring-2 focus:bg-slate-600 focus:outline-none"
	use:typeAction
	{placeholder}
	bind:value
/>
