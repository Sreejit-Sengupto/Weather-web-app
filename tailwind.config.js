/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'clouds': "url('/clouds-reduced-op.png')"
      },
      fontFamily: {
        'raleway': [ 'Raleway', 'sans-serif']
      },
      boxShadow: {
        'searchBtn': "0 4px 4px #00000040"
      }
    },
  },
  plugins: [],
}