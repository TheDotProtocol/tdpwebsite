const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F7931A', // Gold accent
          50: '#FEF9F2',
          100: '#FDF3E5',
          200: '#FBE3C3',
          300: '#F9D3A1',
          400: '#F8B35E',
          500: '#F7931A',
          600: '#DE8417',
          700: '#B96E14',
          800: '#935810',
          900: '#78470D',
        },
        dark: {
          DEFAULT: '#1A1B1E',
          50: '#2C2D31',
          100: '#252629',
          200: '#1E1F22',
          300: '#18191C',
          400: '#131415',
          500: '#0E0F10',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 