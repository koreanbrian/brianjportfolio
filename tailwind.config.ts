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
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        serif: ["Merriweather", "serif"],
        mono: ["Menlo", "monospace"],
        sans: ["Spoqa Han Sans Neo", "NatoSansKR", "sans-serif"],
        noto: ['"Noto Sans KR"', "sans-serif"],
        spoqa: ['"Spoqa Han Sans Neo"', "sans-serif"],
      },
      //let's see
    },
  },
  plugins: [],
};
export default config;
