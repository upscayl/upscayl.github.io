<script>
	export let input = '';
	export let placeholder = 'Enter your email';
</script>

<input
	class="rounded-full bg-slate-700 px-4 py-2 text-center text-base font-light text-slate-200 ring-1 ring-slate-500 transition-all duration-500 placeholder:font-light hover:ring-2 focus:bg-slate-600 focus:outline-none"
	{placeholder}
	type="text"
	bind:value={input}
/>
