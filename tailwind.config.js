/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/!(tailwind).{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: 'var(--accent)',
        alternative: 'var(--alternative)',
        'secondary': 'var(--secondary)',
        'blue-start': 'var(--blue-start)',
        'blue-end': 'var(--blue-end)',
        'blue-default': 'var(--blue-default)',
        'blue-light': 'var(--blue-light)',
        formal: 'var(--formal)',
        'semi-blue-default': 'var(--semi-blue-default)',
      },
      spacing: {
        15: '3.75rem',
        18: '4.5rem',
        50: '12.5rem',
        104: '26rem',
      },
      fontFamily: {
        sans: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        'instruction-card': '21.875rem'
      },
      strokeWidth: {
        3: '3px',
      },
      scale: {
        65: '0.65',
      },
      screens: {
        fold: '281px',
        xs: '341px',
      },
      dropShadow: {
        'blue-light': '0rem 0.188rem 2.75rem var(--blue-light)',
      },
      zIndex: {
        '-1': -1,
      },
    },
  },
}
