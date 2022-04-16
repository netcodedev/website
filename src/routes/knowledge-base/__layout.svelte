<script>
	import { page } from '$app/stores';
	import fs from 'fs';

	const search = $page.url.searchParams.get('search');
	let topics = [];
	fs.readdirSync('./static/knowledge-base/').forEach((file) => {
		if (!file.startsWith('.') && file != 'LICENSE') {
			topics.push(file.substring(0, file.length - 3));
		}
	});
</script>

<div class="banner">
	<div class="opacity-overlay" />
	<div id="particles-js" />
	<div id="banner-content">
		<span class="text center">Welcome to my Knowledge Base</span>
	</div>
</div>
<div id="knowledge-base">
	<div class="content">
		<h2 id="intro" class="center text-thin">
			This area is home to things I stumbled upon over the time. May it be linux commands I need so
			rarely that I always forget them or neat facts I learned over time. It might start small but
			could end up huge.
		</h2>
	</div>
	<div id="search">
		<div class="content">
			<form action="/knowledge-base" class="prevent-transitions" autocomplete="off">
				<input
					type="search"
					placeholder="Search through the knowledge base"
					name="search"
					value={search}
				/><button><i class="material-icons">search</i></button>
			</form>
		</div>
	</div>
	<slot />
	<div class="content">
		<div id="topics">
			{#each topics as topic}
				<a href="/knowledge-base/{topic}">{topic}</a>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	hr {
		border: 1px solid var(--color-bg-12-5);
	}
	#knowledge-base {
		margin-bottom: 10px;
	}
	#topics {
		margin: 10px 10px;
	}
	#topics > a {
		border: 2px solid var(--color-bg-25);
		border-radius: 5px;
		background-color: var(--color-bg-15);
		padding: 20px 30px;
		font-size: 30px;
		display: inline-block;
		color: white;
		transition: background-color 0.2s, transform 0.2s;
	}
	#topics > a:not(:last-child) {
		margin-right: 10px;
	}
	#topics > a:hover {
		background-color: var(--color-bg-20);
		transform: scale(1.05);
	}
	#knowledge-base #intro {
		padding: 10px;
	}
	#knowledge-base #search {
		background-color: var(--color-bg-15);
	}
	#knowledge-base #search form {
		display: block;
		width: 50%;
		padding: 50px;
		transition: width 0.5s;
		margin-left: 50%;
		transform: translateX(-50%);
	}
	#knowledge-base #search form:focus-within {
		width: 60%;
	}
	#knowledge-base #search form input,
	#knowledge-base #search form button {
		background-color: var(--color-bg-25);
		border: 3px solid var(--color-bg-25);
		outline: none;
		font-size: 20px;
		vertical-align: middle;
	}
	#knowledge-base #search form input[type='search'] {
		width: calc(100% - 63px);
		border-radius: 100px 0 0 100px;
		padding: 15px 25px;
		caret-color: white;
		color: white;
	}
	#knowledge-base #search form button {
		border-radius: 0 100px 100px 0;
		color: white;
		padding: 10px 10px 7px 10px;
	}
	#knowledge-base #search form button i {
		font-size: 34px;
	}
	#knowledge-base #content h1 {
		padding: 10px 5px;
		border-bottom: 2px solid var(--color-bg-20);
	}
	#knowledge-base #content h2 {
		padding: 10px 5px;
		border-bottom: 1px solid var(--color-bg-20);
	}
	#search-results > h1 {
		font-family: Roboto;
		font-weight: lighter;
		margin: 10px 0px;
		padding: 10px 5px;
		border-bottom: 2px solid var(--color-bg-20);
	}
	#search-results .stats {
		display: block;
		color: var(--color-bg-30);
		margin: 10px;
	}
	#search-results .search-result {
		display: block;
		padding: 10px;
		border-radius: 5px;
		margin: 10px;
		background-color: var(--color-bg-15);
		transition: transform 0.2s;
	}
	#search-results .search-result:hover {
		transform: scale(1.01);
	}
	#search-results .search-result h1 {
		margin: 0px;
		padding: 5px 10px;
	}
	#search-results .search-result h1 a {
		color: white;
	}
	#search-results .search-result ol,
	#search-results .search-result ul {
		margin: 0px;
	}
	@media (max-width: 1100px) {
		#knowledge-base #search form {
			width: 80%;
		}
		#knowledge-base #search form:focus-within {
			width: 90%;
		}
	}
	@media (max-width: 800px) {
		#knowledge-base #search form {
			width: calc(100% - 40px);
			padding: 50px 10px;
			margin-left: 20px;
			transform: none;
		}
		#knowledge-base #search form:focus-within {
			width: calc(100% - 40px);
		}
	}
</style>
