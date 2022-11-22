/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "press-start": "'Press Start 2P', cursive",
        "pt-sans": "'PT Sans', sans-serif",
      },
      colors: {
        grey: {
          light: "#EEEDF4",
          dark: "#606A86",
        },
        blue: {
          dark: "#191D32",
          bright: "#5E2BFF",
          light: "#9270FF",
        },
        yellow: "#FFF05A",
      },
      fontSize: {
        sm: ["18px", "23px"],
        md: ["22px", "26px"],
        lg: ["25px", "30px"],
        xl: ["30px", "40px"],
        "2xl": ["36px", "45px"],
      },
      keyframes: {
        moveSprite: {
          from: {
            transform: "translate3d(0px,0,0)",
          },
          to: {
            transform: "translate3d(-100%,0,0)",
          },
        },
        arrowPointer: {
          "0%, 100%": { transform: "translateX(-20%)" },
          "50%": { transform: "translateX(0)" },
        },
        appear: {
          "0%": { transform: "translateY(0)" },
          "33%": { transform: "translateY(5%)" },
          "66%": { transform: "translateY(-5%)" },
          "100%": { transform: "translateX(0)" },
        },
        appearTop: {
          "0%": { transform: "translateY(-10%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "moveSprite-4": "moveSprite 1s steps(4) infinite",
        "moveSprite-6": "moveSprite 1s steps(6) infinite",
        "moveSprite-7": "moveSprite 1s steps(7) infinite",
        "moveSprite-8": "moveSprite 1s steps(8) infinite",
        arrowPointer: "arrowPointer 1s linear infinite;",
        appear: "appear 1.5s 1",
        appearTop: "appearTop 1s 1",
      },
      screens: {
        xs: "370px",
        sm: "800px",
        md: "1000px",
        lg: "1200px",
        xl: "1400px",
      },
    },
  },
  plugins: [],
};
