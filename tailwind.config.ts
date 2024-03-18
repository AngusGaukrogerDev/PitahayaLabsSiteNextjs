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
      'pitahaya-yellow': { DEFAULT: '#ECBA0B'}, 
      'pitahaya-grey': { DEFAULT: '#808080', 100: '#1a1a1a', 200: '#333333', 300: '#4d4d4d', 400: '#666666', 500: '#808080', 600: '#999999', 700: '#b3b3b3', 800: '#cccccc', 900: '#e6e6e6' }, 
      'pitahaya-beige': { DEFAULT: '#E3DDD5'}, 
      'pitahaya-black': { DEFAULT: '#2C2C2D'},
      'pitahaya-white': { DEFAULT: '#FFFFFF'},
      'pitahaya-light-grey': { DEFAULT: '#E7E7E7'},
      'pitahaya-medium-grey': { DEFAULT: '#A8A9AB'},
    }
    }
  },
  plugins: [],
};
export default config;
