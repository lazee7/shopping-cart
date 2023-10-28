/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
        body: '#D2D2D2',
        accent: '#DB6B97',
        primary: '#2D2D2D',
        secondary: '#FFFFFF',
        tertiay: '#737373',
        active: '#FFCE31',
      },
      boxShadow: {
        ml: '0px 1px 2px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
