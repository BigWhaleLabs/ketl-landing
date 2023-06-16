/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/!(tailwind).{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-start': 'var(--blue-start)',
        'blue-end': 'var(--blue-end)',
        'blue-default': 'var(--blue-default)',
        'blue-light': 'var(--blue-light)',
      },
      fontFamily: {
        sans: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        fold: '281px',
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
