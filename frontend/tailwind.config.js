/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      primary: {
        DEFAULT: '#001b5e', // Root color
        light: '#d6d3d1', // Equivalent to stone-400
        dark: '#1f2937', // Equivalent to gray-800
        darkRed: '#9f1239', // Dark red
      },
      textShadow: {
        text: '0px 0px 5px rgba(0, 0, 0, 0.5)', // Custom text shadow
      },
      maxHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      },
      animation: {
        reveal: 'reveal 0.3s ease-in forwards',
      },
      keyframes: {
        reveal: {
          '0%': { transform: 'scaleX(0)', display: 'none' },
          '100%': { transform: 'scaleX(1)', display: 'block' },
        },
      },
    },
  },
  plugins: [],
};
