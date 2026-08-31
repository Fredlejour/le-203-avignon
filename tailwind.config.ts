import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#E8EDF2",
          100: "#C5D0DE",
          200: "#9BAFC5",
          300: "#7190AC",
          400: "#4A7093",
          500: "#1A3A5C",
          600: "#152F4A",
          700: "#0F2438",
          800: "#0B1D2E",
          900: "#071420",
        },
        gold: {
          50: "#FDF8F0",
          100: "#F8ECDA",
          200: "#F0D9B5",
          300: "#E8C690",
          400: "#D4A86A",
          500: "#C8965A",
          600: "#B07D3F",
          700: "#8E6432",
          800: "#6C4C26",
          900: "#4A341A",
        },
        warm: {
          50: "#FDFCFA",
          100: "#F8F6F3",
          200: "#F0ECE6",
          300: "#E8E2D9",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "count-up": "countUp 2s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
