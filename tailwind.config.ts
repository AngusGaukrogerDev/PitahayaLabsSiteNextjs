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
      'gunmetal': { DEFAULT: '#292f36', 100: '#080a0b', 200: '#111316', 300: '#191d21', 400: '#21262c', 500: '#292f36', 600: '#4d5966', 700: '#728294', 800: '#a1acb8', 900: '#d0d5db' }, 
      'blue_gray': { DEFAULT: '#6699cc', 100: '#0f1f2e', 200: '#1f3d5c', 300: '#2e5c8a', 400: '#3d7ab8', 500: '#6699cc', 600: '#85add6', 700: '#a3c2e0', 800: '#c2d6eb', 900: '#e0ebf5' }, 
      'snow': { DEFAULT: '#fffbff', 100: '#650065', 200: '#ca00ca', 300: '#ff30ff', 400: '#ff95ff', 500: '#fffbff', 600: '#fffbff', 700: '#fffcff', 800: '#fffdff', 900: '#fffeff' },
     
      'pitahaya-yellow': { DEFAULT: '#edbb0c', 100: '#2f2602', 200: '#5f4b05', 300: '#8e7107', 400: '#be970a', 500: '#edbb0c', 600: '#f5cc39', 700: '#f7d96b', 800: '#fae69c', 900: '#fcf2ce' }, 
      'pitahaya-orange': { DEFAULT: '#f8aa00', 100: '#322200', 200: '#644400', 300: '#966600', 400: '#c88900', 500: '#f8aa00', 600: '#ffbd2f', 700: '#ffce63', 800: '#ffde97', 900: '#ffefcb' }, 
      'pitahaya-grey': { DEFAULT: '#808080', 100: '#1a1a1a', 200: '#333333', 300: '#4d4d4d', 400: '#666666', 500: '#808080', 600: '#999999', 700: '#b3b3b3', 800: '#cccccc', 900: '#e6e6e6' }, 
      'pitahaya-beige': { DEFAULT: '#e4ddd5', 100: '#362d22', 200: '#6b5944', 300: '#9f8568', 400: '#c1b19e', 500: '#e4ddd5', 600: '#e9e3dc', 700: '#eeeae5', 800: '#f4f1ee', 900: '#f9f8f6' }, 
      'pitahaya-yellow-2': { DEFAULT: '#efd43f', 100: '#383005', 200: '#6f6009', 300: '#a7900e', 400: '#dfc012', 500: '#efd43f', 600: '#f2dd64', 700: '#f6e68b', 800: '#f9eeb2', 900: '#fcf7d8' }, 
      'pitahaya-black': { DEFAULT: '#010101', 100: '#000000', 200: '#000000', 300: '#000000', 400: '#000000', 500: '#010101', 600: '#333333', 700: '#666666', 800: '#999999', 900: '#cccccc' },
      'pitahaya-white': { DEFAULT: '#f8fbfc', 100: '#1e3c46', 200: '#3c788c', 300: '#6cabc0', 400: '#b2d3de', 500: '#f8fbfc', 600: '#f9fcfd', 700: '#fbfdfd', 800: '#fcfdfe', 900: '#fefefe' }
    }
    }
  },
  plugins: [],
};
export default config;
