const config = {
  content: ["./index.html", "./pages/**/*.{jsx,js}", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      xl: "1280px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          sm: "20px",
          md: "25px",
          xl: "30px",
        },
      },
      colors: {
        bgColor: "#0e0d0d",
        secondBg: "rgba(12, 12, 12, 0.4)",
        textColor: "#f4f6f7",
        minorTextColor: "#707479",
      },
      fontFamily: {
        "bona-nova": ['"Bona Nova SC"', "serif"],
        "dancing-script": ['"Dancing Script"', "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
