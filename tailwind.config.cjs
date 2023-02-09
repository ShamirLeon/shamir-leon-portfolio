/** @type {import('tailwindcss').Config} **/
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			transparent: 'transparent',
			'Dark-Blue': '#022B3A',
			'Accent-Blue': '#1F7A8C',
			'Light-Accent-Blue': '#BFDBF7',
			'Light-Gray': '#E1E5F2',
			'Light-Green': '#74E7DA',
			White: '#FFFFFF',
			Black: '#000000',
		},
		fontFamily: {
			Roboto: 'Roboto, sans-serif;',
			Sora: 'Sora, sans-serif;',
		},
		extend: {},
	},
	plugins: [],
};
