/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        retro: '0.25rem',
      },
      borderWidth: {
        1: '1px',
        3: '3px',
        5: '5px',
      },
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
        froly: {
          100: '#FABFCD',
          200: '#EE7293',
        },
      },
      cursor: {
        default: 'url(/src/assets/cursor-default.svg), auto',
        pointer: 'url(/src/assets/cursor-pointer.svg), pointer',
        text: 'url(/src/assets/cursor-text.svg), text',
      },
      fontFamily: {
        sysfont: ['FA Sysfont C', 'sans-serif'],
        w95fa: ['W95FA', 'sans-serif'],
        fredoka: ['Fredoka', 'sans-serif'],
      },
      gridRowEnd: {
        7: '7',
        8: '8',
        9: '9',
      },
      screens: {
        desktop: '1280px',
      },
      animation: {
        crt: 'crt 0.15s infinite',
        scanline: 'scanline 2s linear infinite',
        pop: 'pop 200ms ease',
        wave: 'wave 2s infinite',
        squiggle: 'squiggle 0.25s steps(2) infinite',
      },
      keyframes: {
        crt: {
          '0%': {
            'text-shadow':
              '0.4389924193300864px 0 1px rgba(0, 30, 255, 0.5), -0.4389924193300864px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px',
          },
          '5%': {
            'text-shadow':
              '2.7928974010788217px 0 1px rgba(0, 30, 255, 0.5), -2.7928974010788217px 0 2px rgba(255, 0, 80, 0.3), 0 0 3px',
          },
          '10%': {
            'text-shadow':
              '0.02956275843481219px 0 1px rgba(0, 30, 255, 0.5), -0.02956275843481219px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px',
          },
          '15%': {
            'text-shadow':
              '0.40218538552878136px 0 1px rgba(0, 30, 255, 0.5), -0.40218538552878136px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px',
          },
          '20%': {
            'text-shadow':
              '3.4794037899852017px 0 1px rgba(0, 30, 255, 0.5), -3.4794037899852017px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px',
          },
          '25%': {
            'text-shadow':
              '1.6125630401149584px 0 1px rgba(0, 30, 255, 0.5), -1.6125630401149584px 0 2px rgba(255, 0, 80, 0.3), 0 0 3px',
          },
          '30%': {
            'text-shadow':
              '0.7015590085143956px 0 1px rgba(0, 30, 255, 0.5), -0.7015590085143956px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px',
          },
          '35%': {
            'text-shadow':
              '3.896914047650351px 0 1px rgba(0, 30, 255, 0.5), -3.896914047650351px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px',
          },
          '40%': {
            'text-shadow':
              '3.870905614848819px 0 1px rgba(0, 30, 255, 0.5), -3.870905614848819px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px',
          },
          '45%': {
            'text-shadow':
              '2.231056963361899px 0 1px rgba(0, 30, 255, 0.5), -2.231056963361899px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px',
          },
          '50%': {
            'text-shadow':
              '0.08084290417898504px 0 1px rgba(0, 30, 255, 0.5), -0.08084290417898504px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px',
          },
          '55%': {
            'text-shadow':
              '2.3758461067427543px 0 1px rgba(0, 30, 255, 0.5), -2.3758461067427543px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px',
          },
          '60%': {
            'text-shadow':
              '2.202193051050636px 0 1px rgba(0, 30, 255, 0.5), -2.202193051050636px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px',
          },
          '65%': {
            'text-shadow':
              '2.8638780614874975px 0 1px rgba(0, 30, 255, 0.5), -2.8638780614874975px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px',
          },
          '70%': {
            'text-shadow':
              '0.48874025155497314px 0 1px rgba(0, 30, 255, 0.5), -0.48874025155497314px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px',
          },
          '75%': {
            'text-shadow':
              '1.8948491305757957px 0 1px rgba(0, 30, 255, 0.5), -1.8948491305757957px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px',
          },
          '80%': {
            'text-shadow':
              '0.0833037308038857px 0 1px rgba(0, 30, 255, 0.5), -0.0833037308038857px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px',
          },
          '85%': {
            'text-shadow':
              '0.09769827255241735px 0 1px rgba(0, 30, 255, 0.5), -0.09769827255241735px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px',
          },
          '90%': {
            'text-shadow':
              '3.443339761481782px 0 1px rgba(0, 30, 255, 0.5), -3.443339761481782px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px',
          },
          '95%': {
            'text-shadow':
              '2.1841838852799786px 0 1px rgba(0, 30, 255, 0.5), -2.1841838852799786px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px',
          },
          '100%': {
            'text-shadow':
              '2.6208764473832513px 0 1px rgba(0, 30, 255, 0.5), -2.6208764473832513px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px',
          },
        },
        scanline: {
          '0%': { top: '0' },
          '100%': { top: '100%' },
        },
        pop: {
          '0%': { transform: 'none' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'none' },
        },
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
      transitionTimingFunction: {
        popup: 'ease',
      },
      transitionDuration: {
        popup: '250ms',
      },
    },
    keyframes: {
      bounce: {
        '50%': {
          transform: 'translateY(-10%)',
          'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
        },
        '0%, 100%': {
          transform: 'none',
          'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
        },
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
