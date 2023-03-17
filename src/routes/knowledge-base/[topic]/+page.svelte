<script script>
	import { marked } from 'marked';

	export let data;
	
	const md = marked.parse(data.topic);
</script>

<div id="content" class="content">
	{@html md}
	<hr />
</div>
