/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Oswald: ["Oswald", "sans-serif"],
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        Authorfont: ["Minerva-Modern-Regular", "sans-serif"],
        CooperHevitt: ["CooperHewitt-Light", "sans-serif"],

      },
    },
  },
  plugins: [],
};
