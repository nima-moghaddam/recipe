import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      xs: "360px",
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1024px",
      "2xl": "1200px",
      "3xl": "1300px",
    },
    colors: {
      white: "#F3F3F3",
      secondary: "#FE5E54",
      primary: {
        normal: "#F79F1A",
        dark: "#F89602",
      },
    },
  },
  plugins: [],
};
export default config;
