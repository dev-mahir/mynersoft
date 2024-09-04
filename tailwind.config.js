/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				green: {
					50: "#30AF5B",
					90: "#292C27",
				},
				primary: "#30AF5B",
				secondary: "#30AF90"
			},
			screens: {
				"3xl": "1680px",
			},
			maxWidth: {
				"10xl": "1512px",
			},
			backgroundImage: {
				"bg-img-1": "url('/img-1.png')",
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
