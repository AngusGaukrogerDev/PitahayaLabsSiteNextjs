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
      'amaranth': { DEFAULT: '#d91a4d', 100: '#2c050f', 200: '#580a1f', 300: '#830f2e', 400: '#af153e', 500: '#d91a4d', 600: '#e9416e', 700: '#ee7192', 800: '#f4a0b6', 900: '#f9d0db' }, 
      'naples_yellow': { DEFAULT: '#f1d15a', 100: '#3d3105', 200: '#7a620b', 300: '#b79310', 400: '#ebbf1e', 500: '#f1d15a', 600: '#f4da7c', 700: '#f6e39c', 800: '#f9ecbd', 900: '#fcf6de' }, 
      'gunmetal': { DEFAULT: '#292f36', 100: '#080a0b', 200: '#111316', 300: '#191d21', 400: '#21262c', 500: '#292f36', 600: '#4d5966', 700: '#728294', 800: '#a1acb8', 900: '#d0d5db' }, 'blue_gray': { DEFAULT: '#6699cc', 100: '#0f1f2e', 200: '#1f3d5c', 300: '#2e5c8a', 400: '#3d7ab8', 500: '#6699cc', 600: '#85add6', 700: '#a3c2e0', 800: '#c2d6eb', 900: '#e0ebf5' }, 
      'snow': { DEFAULT: '#fffbff', 100: '#650065', 200: '#ca00ca', 300: '#ff30ff', 400: '#ff95ff', 500: '#fffbff', 600: '#fffbff', 700: '#fffcff', 800: '#fffdff', 900: '#fffeff' } }
    }
  },
  plugins: [],
};
export default config;
