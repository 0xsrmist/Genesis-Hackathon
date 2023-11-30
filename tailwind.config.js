/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage:{
        'theme-dark-button': 'linear-gradient(165deg, #C684F1 50%, #000000 calc(50% + 1px))',
        'theme-light-button': 'linear-gradient(160deg, #FFFFFF 50%, #9C9EFE calc(50% + 1px))',
        'card-grad': 'radial-gradient(ellipse at 25% -30%, #3A81BF 8%, transparent 80%)',
        'track-card-grad': 'linear-gradient(180deg, #170C8C 50%, #AE4AFF calc(50% + 1px))'
      }
    },
  },
  plugins: [],
}