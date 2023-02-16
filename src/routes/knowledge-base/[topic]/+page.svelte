<script script>
	throw new Error(
		'@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)'
	);

	import fs from 'fs';
	import { marked } from 'marked';
	export let data;
	const md = marked.parse(fs.readFileSync('./static/knowledge-base/' + data.topic + '.md', 'utf8'));
</script>

<div id="content" class="content">
	{@html md}
	<hr />
</div>
