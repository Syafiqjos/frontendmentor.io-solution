module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-blue": "hsl(246, 80%, 60%)",

				"primary-work": "hsl(15, 100%, 70%)",
				"primary-play": "hsl(195, 74%, 62%)",
				"primary-study": "hsl(348, 100%, 68%)",
				"primary-exercise": "hsl(145, 58%, 55%)",
				"primary-social": "hsl(264, 64%, 52%)",
				"primary-self-care": "hsl(43, 84%, 65%)",

				"neutral-very-dark-blue": "hsl(226, 43%, 10%)",
				"neutral-dark-blue": "hsl(235, 46%, 20%)",
				"neutral-desaturated-blue": "hsl(235, 45%, 61%)",
				"neutral-pale-blue": "hsl(236, 100%, 87%)",
			},
			backgroundImage: {
				"icon-ellipsis": "url('/src/images/icon-ellipsis.svg')",
				"icon-exercise": "url('/src/images/icon-exercise.svg')",
				"icon-play": "url('/src/images/icon-play.svg')",
				"icon-self-care": "url('/src/images/icon-self-care.svg')",
				"icon-social": "url('/src/images/icon-social.svg')",
				"icon-study": "url('/src/images/icon-study.svg')",
				"icon-work": "url('/src/images/icon-work.svg')",
			},
		},
		fontFamily: {
			rubik: "'Rubik', sans-serif",
		},
	},
	plugins: [],
};
