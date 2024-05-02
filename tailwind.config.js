/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#03a30f",
        slate: "#2D2D37",
        brown: "#4B3932",
        wheat: "#F6F3EC",
        yellow: "#B6903F",
      },
    },
  },
  plugins: [],
};
