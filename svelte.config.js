import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import md from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [preprocess(), md.mdsvex(mdsvexConfig)],

	kit: {
		adapter: adapter(),
		vite: {
			server: {
				fs: {
					allow: ['.']
				}
			}
		},
		prerender: {
			onError: 'continue'
		}
	}
};

export default config;
