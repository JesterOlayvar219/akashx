/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        onest: ["Onest", "sans-serif"],
        "onest-bold": ["Onest-Bold", "sans-serif"],
      },
      fontSize: {
        normal: "18px",
        title: "80px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      width: {
        "webkit-fill": "-webkit-fill-available",
      },
      colors: {
        medium_black_100: "#040404",

        medium_gray_100: "#101010",
        medium_gray_200: "#A3A3A3",
        medium_gray_300: "#1b1b1b",
        medium_gray_400: "#3D3D3D",
        medim_gray_500: "#2E2922",
        medium_yellow_100: "#D09C27",
        medium_yellow_200: "#FDF0A3",
        medium_yellow_300: "#E0B84E",
        medium_yellow_400: "#F6D78D",
        medium_yellow_500: "#EBBB29",
        medium_yellow_600: "#C1954A",
      },
      spacing: {
        // 10: "10px",
        52.16: "52.16px",
        56: "56px",
        58: "58px",
        60: "60px",
        61: "61px",
        100: "100px",
        101: "101px",
        115: "115px",
      },
    },
  },
  plugins: [],
};
