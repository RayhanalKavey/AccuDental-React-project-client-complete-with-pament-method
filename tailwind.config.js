/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#343496",

          secondary: "#7f5dc8",

          accent: "#352B4C",

          neutral: "#E3DBF5",

          "base-100": "#F6F3FC",

          info: "#ede7f8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
