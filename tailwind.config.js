module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			animation: {
				translateUpwards: "translateUpwards 6s linear infinite",
				zoomOut: "zoomOut 6s linear infinite",
			},
			colors: {
				"aquapharma-blue": "#48dbfb",
			},
			aspectRatio: {
				"3/2": "3 / 2",
			},
			keyframes: {
				translateUpwards: {
					"0%": { transform: "translateY(10%)" },
					"100%": { transform: "translateY(0)" },
				},
				zoomOut: {
					"100%": { width: "100%" },
				},
			},
			gridTemplateColumns: {
				"responsiveness-250px-columns":
					"repeat(auto-fit, minmax(250px, 1fr))",
			},
		},
	},
	plugins: [],
};
