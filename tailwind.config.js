import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extends: {
			fontFamily: {
				sans: ['muli', 'sans-serif'],
			},
		},
	},
	plugins: [typography],
}
