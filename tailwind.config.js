/* eslint @typescript-eslint/no-var-requires: "off" */
/* eslint-env node */
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
        sl: '4.08115px 4.08115px 10.88305px 0px rgba(0, 0, 0, 0.20) inset',
      },
      keyframes: {
        'slide-in': {
          '0%': {
            opacity: '0',
            right: '-200px',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.7s ease-in-out',
      },
    },
  },
  /* tslint:disable no-var-requires */

  plugins: [require('tailwindcss-3d')({ legacy: true })],
};
