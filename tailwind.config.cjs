/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'poppins': ['Poppins']
			},
			colors:{
				'primaryBlue': '#88D3E1',
				'primaryRed': '#F04E50',
				'primaryWhite': '#FFFFFF',
				'primaryBlack': '#151715',
				'primaryNavy': '#232C47',
				'backgroundBlack': '#131313'
			},
			spacing: {
				'2/3': '66.66667%',
				'7/12': '58.333333%',
				'1/2': '50%'
			}
		},
		screens:{
			'lg' : '800px'
		}
	},
	plugins: [],
}
