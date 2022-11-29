/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/pages/**/*.{vue,js,ts,jsx,tsx}',
    './src/components/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        periwinkle: {
          100: '#7DADE4',
          200: '#4550AE',
          300: '#323646',
        },
      },
      fontFamily: {
        gingerbold: ['f37_gingerbold', 'sans-serif'],
      },
      gridTemplateColumns: {
        ruler: 'repeat(12, 1fr)',
      },
      animation: {
        wave: 'wave 2s infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(20.0deg)' },
          '20%': { transform: 'rotate(-8.0deg)' },
          '30%': { transform: 'rotate(14.0deg)' },
          '40%': { transform: 'rotate(-4.0deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate( 0.0deg)' },
        },
      },
      maxWidth: {
        'screen-5xl': '2560px',
      },
      screens: {
        '2.5xl': '1895px',
        '3xl': '1920px',
        '4xl': '2150px',
        '5xl': '2560px',
      },
    },
  },
  plugins: [
    require('tailwindcss-fluid-type')({
      settings: {
        fontSizeMin: 0.75,
        fontSizeMax: 1.25,
        ratioMin: 1.125,
        ratioMax: 1.2,
        screenMin: 20,
        screenMax: 96,
        unit: 'rem',
        prefix: 'fluid-',
        extendValues: true,
      },
      values: {
        xs: [-2, 1.6],
        sm: [-1, 1.6],
        base: [0, 1.6],
        lg: [1, 1.6],
        xl: [2, 1.2],
        '2xl': [3, 1.2],
        '3xl': [4, 1.2],
        '4xl': [5, 1.1],
        '5xl': [6, 1.1],
        '6xl': [7, 1.1],
        '7xl': [8, 1],
        '8xl': [9, 1],
        '9xl': [10, 1],
      },
    }),
  ],
  variants: {
    fluidType: ['responsive'],
  },
};
