/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-background': "url('./src/img/photo3.png')",
      })
    },
  },
  plugins: [],
}

