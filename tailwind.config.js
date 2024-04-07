/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#14b8a6',
        dark: '#0f172a',
        darkBlue: '#071952',
        logoJS: '#cec80d',
        logoHTML: '#fa7000',
        logoCSS: '#13c1ec',
        logoDB: '#165cd4',
        logoReact: '#03d3fc',
        logoWP: '#13b8cd',
        logoHTML: '#fa7000',
      },
      container: {
        center: true,
        padding: '16px',
      },
    },
  },
  plugins: [],
}

