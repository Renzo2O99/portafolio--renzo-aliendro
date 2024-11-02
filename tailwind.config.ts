import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8f6dce',
        secondary: "#F5741C",
      },
      boxShadow: {
        "button-1":
          "rgba(151, 65, 252, 0.2) 0 15px 30px -5px",
      },
      backgroundColor: {
        "span-button-1": 
          "rgb(5, 6, 45)",
      },
      backgroundImage: {
        "darkBg":
          "linear-gradient(0deg, rgba(0,13,36,1) 0%, rgba(5,27,106,1) 73%, rgba(89,36,168,1) 96%)",
        "gradient-cover-home": 
          "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
        "span-button-2":
          "linear-gradient(135deg, #f34079 40%, #fc894d)",
        "gradient-button-1": 
          "linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)",
      },
      zIndex: {
        '100': '100',
      },
      transitionProperty: {
        'all': 'all'
      },
      transitionDuration: {
        '200': '200ms',
      },
      scale: {
        '90': '.9',
      },
      opacity: {
        '75': '.75',
      },
    },
  },
  plugins: [],
};

export default config;
