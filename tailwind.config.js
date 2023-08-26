/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#101322',
        secondary: '#172036',
        borderColor: '#25304a',
        hoverColor: '#4263eb',
        kakaoColor:'#FEE500',
      },
      backgroundImage:{
        'hero':'url("/cover.png")',
      }
    },
  },
  plugins: [],
};
