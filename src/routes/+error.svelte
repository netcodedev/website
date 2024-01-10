<script>
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="flex h-screen flex-col items-center justify-center">
	<div class="max-w-md">
		<h1 class="text-5xl font-bold">{$page.status}</h1>
		<p class="py-1">{$page?.error?.message}</p>
		<Button href="/">Back</Button>
	</div>
</div>
