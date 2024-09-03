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
        gray: {
          10: '#f2f2f2',
          20: '#9f9f9f',
          30: '#7B7B7B',
          40: '#efeeed',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: 'ffa200',
        },
        blue: {
          70: '#3a3a3a',
        },
        black: {
          50: '#222222',
        }
      }
    },
  },
  plugins: [],
};
export default config;
