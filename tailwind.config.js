/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",

    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flexBasis: {
        "1/5": "21.6%",
        "2/5": "43.2%",
        "3/5": "64.8%",
        "4/5": "86.4%",
      },
      colors: {},
    },
  },
  plugins: [],
};
