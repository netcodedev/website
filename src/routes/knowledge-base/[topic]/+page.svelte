<script>
	import { marked } from 'marked';

	export let data;
	let md = marked.parse(data.topic);
	$: md = marked.parse(data.topic);
</script>

<div id="content" class="content">
	{@html md}
	<hr />
</div>
