import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
// import { VitePWA } from 'vite-plugin-pwa';
// import * as path from 'path';

export default defineConfig({
	build: {
		minify: 'terser',
		// reportCompressedSize: false, // For fast build
		// outDir: './public',
		// emptyOutDir: false,
		// rollupOptions: {
		//   input: '/index.html',
		//   // DEV
		//   // output: {
		//   //   manualChunks: {
		//   //     ...renderChunks(dependencies),
		//   //   },
		//   // },
		// },
	},
	// resolve: {
	// 	alias: {
	// 		'@': path.resolve(__dirname, './src'),
	// 	},
	// },
	plugins: [
		laravel({
			// input: 'resources/js/app.jsx',
			input: 'resources/js/index.tsx',
			refresh: true,
		}),
		react(),
	],
	server: {
    port: 5121, // Default = 5173
    /** @DOCS : https://vitejs.dev/config/server-options.html#server-strictport */
    // strictPort: true, // Default = false
    // https: true,
    // host: true,
  },
});
