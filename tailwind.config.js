// import defaultTheme from 'tailwindcss/defaultTheme';
// import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
	corePlugins: {
    preflight: false,
  },
	prefix: 't-',
  separator: '_',
	content: [
		'./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
		'./storage/framework/views/*.php',
		'./resources/views/**/*.blade.php',
		// './resources/js/**/*.jsx',
		'./resources/js/**/*.tsx',
	],
	theme: {
		extend: {
			// fontFamily: {
			// 	sans: ['Figtree', ...defaultTheme.fontFamily.sans],
			// },

			zIndex: {
				'1': '1',
			},
		},
	},

	plugins: [
		// forms
	],
};
