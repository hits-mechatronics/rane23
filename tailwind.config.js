/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        permarker: ['"Permanent Marker"', "cursive"],
        excali: ['"excalidraw"', "cursive"],
      },
    },
  },
  plugins: [],
};
