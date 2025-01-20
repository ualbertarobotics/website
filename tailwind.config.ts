import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: "#231f20",
        theme1: "#fcbc32",
        theme2: "#e4e3b6",
        theme3: "#fc6471",
        theme4: "#e8d7ff",
      },
    },
  },
  plugins: [],
} satisfies Config;
