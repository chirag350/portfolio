module.exports = {
  content: ["./pages/**/*.{html,js,jsx}", "./components/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'beee': "url('/bg.jpg')",
      },
      colors: {
        'background': '#1E2022',
        'background-table': '#303336',
        'background-table-hover': '#3C3E42',
        'background-table-child': '#3c4044',
      }
    },
  },
  plugins: [],
}
