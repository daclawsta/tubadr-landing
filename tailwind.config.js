/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        tuba: {
          coral:        '#D94F5A',
          'coral-dark': '#C04450',
          'coral-light':'#E8737C',
          navy:         '#1C2E4A',
          'navy-dark':  '#131F34',
          'navy-light': '#2A4066',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

