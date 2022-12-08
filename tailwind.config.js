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
        charcoal: '#2A2829',
        offwhite: {
          100: '#F4F4F4',
          200: '#EBEBEB',
        },
        marino: {
          100: '#BEDAFA',
          200: '#5C79C4',
          300: '#4550AE',
        },
        carnation: '#F55261',
        dandelion: '#FFC328',
        froly: '#F582A1',
      },
      fontFamily: {
        gingerbold: ['F37 Ginger', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        ruler: 'repeat(12, 1fr)',
      },
      animation: {
        wave: 'wave 2s infinite',
        squiggle: 'squiggle 0.25s steps(2) infinite',
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
        squiggle: {
          '0%': { transform: 'none' },
          '100%': { transform: 'skew(1.5deg,.2deg) translate(0,-1.5px)' },
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
        screenMax: 110,
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
        '10xl': [11, 1],
        '11xl': [12, 1],
        '12xl': [13, 1],
      },
    }),
  ],
  variants: {
    fluidType: ['responsive'],
  },
};
