/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			// fontFamily: {
			// 	inter: "Inter",
			// },
			colors: {
				primary: "#2958FF",
				dark: "#08164B",
				light: "#F4F7FF"
			},
		},
		fontFamily: {
			sans: ['Inter', 'sans-serif']
		}
	},
	plugins: [],
};
