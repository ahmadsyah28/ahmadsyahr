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
        background: "var(--background)",
        foreground: "var(--foreground)",
        beige: {
          50: "#f7f5f2",
          100: "#ede8e0",
          200: "#D9D4C8",
          300: "#c5bfb0",
          400: "#b1a998",
        },
        yellow: {
          accent: "#E8E35E",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
