import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, normalizePath } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
	plugins: [
		viteStaticCopy({
			targets: [
				{
					src: normalizePath("node_modules/@cdssnc/gcds-utility/dist/gcds-utility.min.css"),
					dest: normalizePath("@cdssnc/gcds-utility/dist"),
				},
				{
					src: normalizePath("node_modules/@cdssnc/gcds-components/dist"),
					dest: normalizePath("@cdssnc/gcds-components"),
				},
			],
		}),
		sveltekit()
	]
});
