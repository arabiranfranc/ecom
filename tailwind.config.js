/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { inter: ["inter", "serif"] },
      colors: {
        primary: "#24262b",
        "primary-gray": "#5e626f;",
        "primary-green": "#0D775E;",
        "red-gray": "#444444",
        "white-100": "#f3f3f3",
      },
    },
  },
  plugins: [],
};
