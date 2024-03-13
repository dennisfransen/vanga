import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['muli', 'sans-serif'],
			},
		},
	},
	plugins: [forms, typography],
}
