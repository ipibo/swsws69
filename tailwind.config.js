/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./components/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./slices/**/**.{vue,js}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#000E7D",
        primaryRed: "#820000",
        primaryGreen: "#006E02",
        primaryGrey: "#e5e5e5",

        secondaryBlue: "#0000FF",
        secondaryRed: "#ff6200",
        secondaryGreen: "#00d118",
        secondaryGrey: "#0f0f0f",
      },
      fontFamily: {
        ThreeSix21Pro: ["ThreeSix21Pro", "sans-serif"],
        customFont: ["forma-djr-text", "sans-serif"],
      },
    },

    plugins: [],
  },
}
