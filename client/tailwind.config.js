/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Black: "#212121",
        White: " #f6fcff",
        Orange: "#DB4444",
      },
    },
  },
  plugins: [],
}
