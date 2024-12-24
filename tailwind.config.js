/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'serif'],
        inter: ['Inter', 'serif'],
      },
      colors: {
        skyBlue: '#539EF6',
        thamarBlack: '#181818',
        babyPowder: '#F6FBFA',
        columbiaBlue: '#D6E8FD',
        gradientStart: 'hsla(213, 84%, 65%, 1)',
        gradientEnd: 'hsla(212, 89%, 86%, 1)',
      },
    },
  },
  plugins: [],
};
