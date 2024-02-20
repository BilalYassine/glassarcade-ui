/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'montserrat': ['Montserrat Variable']
			},
			colors:{
				'primaryBlue': '#88D3E1',
				'primaryRed': '#F04E50',
				'primaryWhite': '#FFFFFF',
				'primaryBlack': '#151715',
				'primaryNavy': '#232C47',
			},
		},
		screens:{
			'lg' : '1260px'
		}
	},
	plugins: [],
}
