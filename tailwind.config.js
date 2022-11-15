/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
            colors: {
                'clc-green': '#677b6e',
                'clc-gray': 'rgb(50, 50, 50)',
                'clc-silver': '#c0c0c0',
                'clc-navy': 'rgba(48, 55, 98, 1)',
                'clc-fitness': '#019cdb',
                'clc-parabola': '#fd4f57',
                'clc-venues': '#ffb836',
                'clc-flourish': '#ff6f49',
                'clc-guild':'#865B87',
            },
            fontFamily: {
                 'sans': ['Verlag-Book', ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
              slideA: {
                '0%': { transform: 'translateY(0px)' },
                '50%': { transform: 'translateY(50px)' },
                '100%': { transform: 'translateY(0px)' },
              },
              slideB: {
                '0%': { transform: 'translateX(0px)' },
                '50%': { transform: 'translateX(50px)' },
                '100%': { transform: 'translateX(0px)' },
              },
              slideC: {
                '0%': { transform: 'translateX(0px)' },
                '50%': { transform: 'translateX(-50px)' },
                '100%': { transform: 'translateX(0px)' },
              },
              slideD: {
                '0%': { transform: 'translateY(0px)' },
                '50%': { transform: 'translateY(-50px)' },
                '100%': { transform: 'translateY(0px)' },
              },
            },
            animation: {
              'slide-image-a': 'slideA 15s linear infinite',
              'slide-image-b': 'slideD 15s linear infinite',
              'slide-text-a': 'slideB 15s linear infinite',
              'slide-text-b': 'slideC 15s linear infinite',
            },
    },
  },
  plugins: [],
}
