import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "490": "5.625rem",
      },
    },
  },
  plugins: [],
};

export default config;
