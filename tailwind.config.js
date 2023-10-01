const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '550px',
        md: '950px',
        lg: '1128px',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      maxWidth: {
        '8xl': '86rem',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% /3))' },
        },
        'dot-pulse-before': {
          '0%': { boxShadow: '9984px 0 0 -5px' },
          '30%': { boxShadow: '9984px 0 0 2px' },
          '60%,100%': { boxShadow: '9984px 0 0 -5px' },
        },
        'dot-pulse': {
          '0%': { boxShadow: '9999px 0 0 -5px' },
          '30%': { boxShadow: '9999px 0 0 2px' },
          '60%,100%': { boxShadow: '9999px 0 0 -5px' },
        },
        'dot-pulse-after': {
          '0%': { boxShadow: '10014px 0 0 -5px' },
          '30%': { boxShadow: '10014px 0 0 2px' },
          '60%,100%': { boxShadow: '10014px 0 0 -5px' },
        },
      },
      animation: {
        slide: 'slide 48s linear infinite',
        'dot-pulse-before': 'dot-pulse-before 1.5s infinite linear',
        'dot-pulse': 'dot-pulse 1.5s infinite linear',
        'dot-pulse-after': 'dot-pulse-after 1.5s infinite linear',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
