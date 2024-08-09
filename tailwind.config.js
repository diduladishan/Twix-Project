/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: [
          "Montserrat",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
        knewave: [
          "Knewave",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      keyframes: {
        "light-bounce": {
          "0%, 100%": {
            transform: "translateY(-1%)",
          },
          "50%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "light-bounce": "light-bounce 2s linear infinite",
      },
    },
  },
  plugins: [],
};
