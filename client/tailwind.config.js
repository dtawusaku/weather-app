/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "plus-jakartar": ["Plus Jakarta Sans", "san-serif"],
      },
      fontSize: {
        s1: "1.000rem",
        s2: "1.125rem",
        s3: "1.250rem",
        s4: "1.562rem",
        s5: "1.938rem",
        s6: "2.438rem",
        s7: "3.062rem",
        s8: "4.062rem",
        s9: "5.062rem",
        s12: "6.56rem",
        s13: "7.56rem",
        s14: "8.56rem",
      },

      colors: {
        main: "#f7f6f9",
        "main-dark": "#16131B",
        "white-dark": "#2A2C38",
        ayellow: "#FFDF4A",
        "yellow-dark": "#DDB91A",
        "blue-dark": "#2A337A",
        "dark-white": "#2A2C38",
        "my-gray": "#A5A5A5",
        "my-gray-dark": "#7B7B7B",
        mypurple: "#8a2be2",
        mblue: "#BED7F3",
        "mblue-dark": "#191D28",
        "mblue-text": "#658CAF",
        "mblue-textdeg": "#91B3D2",
        bluegradient: "#296399",
        mm: "#1F3B55",
        mt: "#2A2C38",
        "mb-white": "#F9FBFB",
        blue07: "rgba(141, 170, 197, 0.5)",
        black09: "#414344",
        black08: "#6E7577",
      },
      width: {
        sidebar: "23.9375rem",
      },
      borderRadius: {
        xc: "0.8rem",
        mb: "1.8rem",
      },
      gradientColorStopPositions: {
        33: "33%",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
