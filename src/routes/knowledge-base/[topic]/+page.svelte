<script script>
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import fs from 'fs';
    import { marked } from 'marked';
	export let topic;
	const data = marked.parse(fs.readFileSync('./static/knowledge-base/' + topic + '.md', 'utf8'));
</script>

<div id="content" class="content">
	{@html data}
    <hr>
</div>
