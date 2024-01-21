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
        "transparentDark": "rgba(0, 0, 0, 0.75)",
        "transparentLight": "rgba(220,215,204,0.75)"
      },
    },
  },
  plugins: [],
}

