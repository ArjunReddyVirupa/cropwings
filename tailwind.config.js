/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        buttonBG: "#106d20",
      },
      animation: {
        // "slide-in-left": "slideInLeft 1s ease-out forwards",
        // "slide-in-right": "slideInRight 1s ease-out forwards",
        // "slide-in-bottom": "slideInBottom 1s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "delay-100": "slideUp 0.6s ease-out 0.1s forwards",
        "delay-300": "slideUp 0.6s ease-out 0.3s forwards",
        slideInLeft: "slideInLeft 0.8s ease-out forwards",
        slideInRight: "slideInRight 0.8s ease-out forwards",
      },
      keyframes: {
        // slideInLeft: {
        //   "0%": { transform: "translateX(-200%)", opacity: 0 },
        //   "100%": { transform: "translateX(0)", opacity: 1 },
        // },
        // slideInRight: {
        //   "0%": { transform: "translateX(200%)", opacity: 0 },
        //   "100%": { transform: "translateX(0)", opacity: 1 },
        // },
        // slideInBottom: {
        //   "0%": { transform: "translateY(200%)", opacity: 0 },
        //   "100%": { transform: "translateY(0)", opacity: 1 },
        // },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
