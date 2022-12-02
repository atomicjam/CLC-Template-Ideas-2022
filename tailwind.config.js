/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./index.html", "./breakpoints.html" ,"./components.html"],
  theme: {
    extend: {
            colors: {
                'clc-green': 'rgb(117,142,136)', // old colour #677b6e rgb(116,128,128)
                'clc-pea': 'rgb(215,217,216)',
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
              wiggle: {
                '0%, 100%': { transform: 'rotate(-3deg)' },
                '50%': { transform: 'rotate(3deg)' },
              },
            },
            animation: {
              'slide-image-a': 'slideA 15s linear infinite',
              'slide-image-b': 'slideD 15s linear infinite',
              'slide-text-a': 'slideB 15s linear infinite',
              'slide-text-b': 'slideC 15s linear infinite',
              'wiggle-once': ' wiggle 0.5s ease-in-out 5s 6',
            },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
