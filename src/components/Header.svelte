<script lang="ts">
	import { page } from '$app/stores';

	function ucfirst(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	let url = '';
	$: {
		let path = ucfirst($page.url.pathname.split('/')[1]);
		url = path.length > 1 ? path : 'Home';
	}
</script>

<svelte:head>
	<title>netcode.dev &there4; {url}</title>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700&display=swap"
		crossorigin="anonymous"
	/>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</svelte:head>
<header>
	<div class="content">
		<a href="/" class="no-animation">
			<div class="image-wrapper"><img src="/images/ben.png" alt="Ben" /></div>
			<span>netcode.dev</span>
		</a>
		<menu>
			<a href="/knowledge-base" selected={url == 'Knowledge-base'}>Knowledge Base</a>
			<a href="/projects" selected={url == 'Projects'}>My Projects</a>
		</menu>
	</div>
</header>

<style lang="scss">
	header {
		background-color: var(--color-background-primary);
		border-bottom: 2px solid var(--color-theme-primary);
		padding: 10px;
		top: 0px;
		width: 100%;
		z-index: 10000;
		> .content {
			display: flex;
			justify-content: space-between;
			align-items: center;
			> a {
				padding: 10px;
				text-decoration: none;
				color: var(--color-foreground-primary);
				&:hover {
					text-decoration: none;
				}
				> * {
					display: inline-block;
					vertical-align: middle;
				}
				> span {
					margin-left: 10px;
				}
			}
		}
		menu {
			padding-inline-start: 0;
			a {
				color: inherit;
				font-size: 14px;
				padding: 10px 20px;
				text-decoration: none;
				color: var(--color-foreground-secondary);
				&:visited {
					color: var(--color-foreground-secondary);
				}
				&:hover {
					transition: color 0.2s;
					color: var(--color-theme-primary);
					text-decoration: none;
				}
				&[selected='true'] {
					background-color: var(--color-bg-20);
				}
			}
		}
	}
</style>
