import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/container/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#FFFFFF",
        primary: "#F79F1A",
        secondary: "#046E1B",
        danger: "#FE5E54",
      },
    },
    screens: {
      xs: "360px",
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1224px",
      "2xl": "1200px",
      "3xl": "1300px",
    },
  },
  plugins: [],
};
export default config;
