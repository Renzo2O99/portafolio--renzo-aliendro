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
        backgroundImage: {
          "darkBg":
            "background: linear-gradient(0deg, rgba(0,13,36,1) 0%, rgba(5,27,106,1) 73%, rgba(89,36,168,1) 96%);"
        }
      },
      backgroundImage: {
        "gradient-cover": 
          "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)"
      },
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [],
};
export default config;
