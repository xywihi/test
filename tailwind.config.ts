import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'desktop': '1700px',
      'laptop': '1200px',
      'tablet': '640px',
      'phone': '320px',
      'smallPhone': '240px',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "test111":"linear-gradient(180deg, #38C1A5 -0.01%, #0891D5 99.99%)",
        "test222":"linear-gradient(180deg, #E0AD38 -0.01%, #EB3E1C 93.39%)"
      },
      keyframes: {
        zommAnim: {
            '0%': { transform: 'scale(0)',opacity: '0' },
            '100%': { transform: 'scale(1)',opacity: '1' },
          },
        longAnim: {
            '0%': { width: '0', },
            '100%': { width: '100%' },
          },
      },
      animation: {
        zommAnim: 'zommAnim .5s ease-in-out forwards',
        longAnim: 'longAnim .5s ease-in-out forwards',
      },
      overflow: {
        'hiddenScrollbar1': 'hidden'
      }
    },
    colors:{
      black1:'#030303',
      black2:'#030303e6',
      textgray:"#676767",
      textwhite:"#F2F2F2",
    },
    boxShadow:{
      colorsone:"-4px 4px 0 rgba(0, 0, 0, 0.5)"
    },
    fontFamily: {
      'neuemachina':['neuemachina', 'sans-serif'],
      'nextposter':['nextposter', 'sans-serif'],
            },
    overflow:{
      hiddenScrollbar:`
        overflow-x: auto;
        &:{
          overflow-x: 'scroll'; /* 允许垂直滚动 */
          &::-webkit-scrollbar {
            display: none; /* 对于WebKit浏览器，隐藏滚动条 */
          }
          -ms-overflow-style: none; /* 对于IE和Edge，隐藏滚动条 */
        }
      `,
      hiddenScrollbar1: 'hidden'
    },
    
  },
  plugins: [],
};
export default config;
