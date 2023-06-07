/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        s1: "1.000rem",
        s2: "1.125rem",
        s3: "1.250rem",
        s4: "1.562rem",
        s5: "1.938rem",
        s6: "2.438rem",
        s7: "3.062rem",
      },
      colors: {
        main: "#f7f6f9",
        "main-dark": "#16131B",
        "white-dark": "#2A2C38",
        "yellow-dark": "#DDB91A",
        "blue-dark": "#2A337A",
      },
      width: {
        sidebar: "27.9375rem",
      },
    },
  },
  plugins: [],
};
