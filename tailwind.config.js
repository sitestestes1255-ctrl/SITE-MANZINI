/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        steel: {
          950: '#0d0f11',
          900: '#121518',
          850: '#15181b',
          800: '#1b1f23',
          700: '#262b30',
          600: '#3a4147',
          500: '#5b646c',
          400: '#8b949c',
          300: '#b9c0c6',
          200: '#d9dde0',
          100: '#e7eaed',
        },
        amber: {
          DEFAULT: '#f59e0b',
          soft: '#fbbf24',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Barlow Condensed"', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
