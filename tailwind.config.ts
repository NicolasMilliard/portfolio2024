import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#00002F",
      grey: "#EEEEFF",
      ultramarine: "#4848FC",
      congo_pink: "#FE877A",
    },
    extend: {
      spacing: {
        "32": "32px",
        "40": "40px",
        "54": "54px",
        "60": "60px",
      },
      boxShadow: {
        xl: "0 0 24px rgba(0, 0, 47, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
