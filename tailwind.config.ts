import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkTheme: "var(--darkTheme)",
        redTheme: "var(--redTheme)",
        orangeTheme: "var(--orangeTheme)",
        lightTheme: "var(--lightTheme)",
        blackTheme: "var(--blackTheme)",
        whiteTheme: "var(--whiteTheme)",
        Inputblack: "var(--Inputblack)",
      },
    },
  },
  plugins: [],
} satisfies Config;
