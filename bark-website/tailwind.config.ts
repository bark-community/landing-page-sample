import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Pages
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",

    // Components
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",

    // App
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Additional background images
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Custom Colors
      colors: {
        primary: "#3498db",
        secondary: "#2ecc71",
      },
      // Responsive Design
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      // Typography Configuration
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.primary'),
              '&:hover': {
                color: theme('colors.primaryDark'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    // Add Tailwind CSS plugins if needed in the future
    // For example, require('@tailwindcss/forms')(),
  ],
};

export default config;
