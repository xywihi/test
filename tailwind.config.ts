import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "test111":"linear-gradient(180deg, #38C1A5 -0.01%, #0891D5 99.99%)",
        "test222":"linear-gradient(180deg, #E0AD38 -0.01%, #EB3E1C 93.39%)"
      },
    },
    colors:{
      black1:'#030303',
      textgray:"#676767",
      textwhite:"#F2F2F2",
    },
    boxShadow:{
      colorsone:"-4px 4px 0 rgba(0, 0, 0, 0.5)"
    },
    fontFamily: {
      'neuemachina':['neuemachina', 'sans-serif'],
      'nextposter':['nextposter', 'sans-serif'],
            }
  },
  plugins: [],
};
export default config;
