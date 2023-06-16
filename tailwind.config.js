/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/!(tailwind).{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-start': '#3A00D6',
        'blue-end': '#8355FF',
        'blue-default': '#1A0259',
        'blue-light': '#BFF5FA',
      },
      fontFamily: {
        sans: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
      },
      zIndex: {
        '-1': -1,
      },
    },
  },
}
