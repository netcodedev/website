<script>
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
