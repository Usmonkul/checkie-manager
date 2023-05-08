/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark_blue: "#12232e",
        light_blue: "#007cc7",
        lightest_blue: "#4dabda",
        shadowOfDarkBlue: "#203647",
        shadowOfLightBlue: "#EEFBFB",
        primary_bg: "#F7F9FD",
        primary_white: "#fff",
        text_color: "#3E3E3E",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
