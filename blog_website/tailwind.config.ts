// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-900': '#111827',
        'blue-400': '#60a5fa',
        'blue-600': '#2563eb',
      },
    },
  },
  plugins: [],
};

export default config;