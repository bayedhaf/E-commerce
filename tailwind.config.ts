import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors: {
        darkColor: "#151515",
        lightColor: "#52525b",
        lightOrange: "#fca99b",
        lightBlue: "#7688DB",
        darkBlue: "#6c7fd8",
        lightBg: "#F8F8FB",
      },
    },
  },
  plugins: [],
};
export default config;
