import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      black: "#00002F",
      white: "#FFFFFF",
      grey: "#EEEEFF",
      ultramarine: "#4848FC",
      congo_pink: "#FE877A",
      transparent: "transparent",
    },
    letterSpacing: {
      widest: "10px",
    },
    fontWeight: {
      extralight: "200",
      book: "350",
      normal: "400",
      semibold: "600",
    },
    extend: {
      spacing: {
        "15": "60px",
      },
      boxShadow: {
        xl: "0 0 24px rgba(0, 0, 47, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
