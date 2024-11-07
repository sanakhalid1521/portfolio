import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  fontFamily: {
    cursive: ['"Dancing Script"', 'cursive'],
  },
  boxShadow: {
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', // Custom shadow for text
  },
  plugins: [],
};
export default config;

