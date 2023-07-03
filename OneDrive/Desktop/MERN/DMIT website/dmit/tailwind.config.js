/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        up: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        upSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        hide: {
          "0%, 10%": { opacity: 0, filter: "blur(5px)", transform: "translateX(-100%)" },
          "100%": { opacity: 1, filter: "blur(0)", transform: "translateX(0)" },
        },
      },
      animation: {
        up: "up 2s ease-in-out infinite",
        upSlow: "upSlow 2s ease-in-out infinite",
        hide: "hide 4s",
      },
      flexBasis: {
        '1/7': '14.2857143%',
      },
      transitionProperty: {
        'dropdown': 'max-height, padding',
      }
    },
  },
  plugins: [],
};
