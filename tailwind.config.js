/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        doctorsPortal: {
          primary: "#1582CC",
          secondary: "#23B8C4",
          accent: "#3A4256",
           neutral: "#191D24",
          // "base-100": "#2A303C",

        }
      }
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}