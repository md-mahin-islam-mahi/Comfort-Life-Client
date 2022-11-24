/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        doctorsPortal: {
          primary: "#21ACE8",
          secondary: "#A746F2",
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