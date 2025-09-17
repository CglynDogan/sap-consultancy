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
        // Add semantic color mappings
        primary: {
          DEFAULT: '#009DE0',
          hover: '#007CC0',
          light: '#E3F2FD',
        },
        secondary: {
          DEFAULT: '#7c3aed',
          hover: '#6d28d9',
        },
        success: {
          DEFAULT: '#16a34a',
          hover: '#15803d',
        },
        text: {
          primary: '#111418',
          secondary: '#666666',
          muted: '#999999',
        },
        surface: {
          DEFAULT: '#ffffff',
          muted: '#f0f2f4',
          border: '#e5e5e5',
        },
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