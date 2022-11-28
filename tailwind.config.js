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
        },
      },
      fontFamily: {
        gingerbold: ['f37_gingerbold', 'sans-serif'],
      },
      gridTemplateColumns: {
        ruler: 'repeat(12, 1fr)',
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
  plugins: [],
};
