import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        decreaseLetterSpacing: "decreaseLetterSpacing 1.5s ease-in forwards",
      },
      keyframes: {
        decreaseLetterSpacing: {
          "0%": { letterSpacing: "60px" },
          "100%": { letterSpacing: "2px" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
