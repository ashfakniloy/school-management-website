module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: 12,
        screens: {
          lg: "1225px",
          xl: "1225px",
          "2xl": "1225px",
        },
      },
      fontFamily: {
        openSans: ["Open Sans, sans-serif"],
        oswald: ["Oswald, sans-serif"],
      },
      colors: {
        "custom-gray": "#626262",
        "custom-gray2": "#a9a9a9",
        "custom-gray3": "#a2a2a2",
        "custom-gray4": "#444444",
        "custom-gray5": "#5f5f5f",
        "custom-gray6": "#f2f2f2",
        "custom-green": "#31bf34",
        "custom-green2": "#37ac50",
        "custom-green3": "#218136",
        "custom-green4": "#25b029",
      },
    },
  },
  plugins: [],
};
