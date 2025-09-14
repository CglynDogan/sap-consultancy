import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sap: {
          // Primary Colors
          'brand-blue': '#009DE0',
          'highlight-blue': '#007CC0',
          'deep-gray': '#363E43',
          'light-gray': '#F2F2F2',
          'medium-gray': '#E5E5E5',

          // Accent Colors
          'gold': '#F0AB00',
          'purple': '#AB218E',
          'navy': '#004990',

          // Grayscale
          'gray-50': '#F7F7F7',
          'gray-100': '#F2F2F2',
          'gray-200': '#E5E5E5',
          'gray-300': '#CCCCCC',
          'gray-400': '#BFBFBF',
          'gray-500': '#999999',
          'gray-600': '#666666',
          'gray-800': '#333333',
          'gray-900': '#000000',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'noto-sans': ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
};
export default config;