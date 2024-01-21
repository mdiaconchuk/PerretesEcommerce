/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  "darkMode": "class",
  theme: {
    extend: {
      backgroundColor: {
        "darkBg": "#302c2c",
        "transparentDark": "rgba(0, 0, 0, 0.50)",
        "transparentLight": "rgba(37, 49, 61, 0.8)",
        "hoverTransparentLight": "#86817a",
        "hoverTransparentDark": "#dbd3c8",
      },
    },
  },
  plugins: [],
}

