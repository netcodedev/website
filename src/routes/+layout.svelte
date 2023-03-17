<script>
	import '../app.postcss';
	import { Header, Content, Footer } from '$lib/components';
	import '../style/global.scss';
</script>

<Header />
<Content><slot /></Content>
<Footer />
