/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#1f1337",
        mediumvioletred: "rgba(135, 0, 73, 0.7)",
        indigo: "rgba(84, 0, 135, 0.6)",
        darkslateblue: "rgba(0, 62, 135, 0.9)",
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "bebas-neue": "'Bebas Neue'",
      },
    },
    fontSize: {
      lg: "18px",
      "2xl": "21px",
      inherit: "inherit",
    },
    screens: {
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  plugins: [],
}