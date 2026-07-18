import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F2F0EB",
        "paper-dark": "#E8E4DD",
        ink: "#171412",
        "ink-light": "#3E3A38",
        dusk: "#4A5D7A",
        "dusk-light": "#6B7F9E",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        serif: ["var(--font-source-serif)", "serif"],
        sans: ["var(--font-ibm-plex)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;