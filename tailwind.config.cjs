/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: "class",
	theme: {
    screens: {
      sm: "540px",
      // => @media (min-width: 576px) { ... }

      md: "720px",
      // => @media (min-width: 768px) { ... }

      lg: "960px",
      // => @media (min-width: 992px) { ... }

      xl: "1280px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1320px",
      // => @media (min-width: 1400px) { ... }
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        lightblack: "#27262a",
        white: "#FFFFFF",
        black: "#27262a",
        "dark-700": "#090e34b3",
        blue: {
          DEFAULT: "#88D3E1",
          2: "#5ba7b4",
          3: "#2c7d8a",
          4: "#005561",
          5: "#00303c",
          6: "#9CA3AF",
          7: "#D1D5DB",
          8: "#E5E7EB",
        },
        red: {
          DEFAULT: "#F04E50",
          2: "#cc2a36",
          3: "#a8001e",
          4: "#850003",
          5: "#640000",
          6: "#9CA3AF",
          7: "#D1D5DB",
          8: "#E5E7EB",
        },
        light: {
          DEFAULT: "#CC2A36",
          2: "#cc2a36",
          3: "#a8001e",
          4: "#850003",
          5: "#640000",
          6: "#9CA3AF",
          7: "#D1D5DB",
          8: "#E5E7EB",
        },
        dark: {
          DEFAULT: "#5BA7B4",
          2: "#5ba7b4",
          3: "#2c7d8a",
          4: "#005561",
          5: "#00303c",
          6: "#9CA3AF",
          7: "#D1D5DB",
          8: "#E5E7EB",
        },
        primaryred: "#F04E50",
        primaryblue: "#FFFFFF",
        primary: "#FFFFFF",
        "blue-dark": "#FFFFFF",
        secondary: "#FFFFFF",
        "body-color": "#FFFFFF",
        "body-secondary": "#FFFFFF",
        warning: "#FBBF24",
        stroke: "#FFFFFF",
        "gray-1": "#FFFFFF",
        "gray-2": "#FFFFFF",
        "gray-7": "#FFFFFF",
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      boxShadow: {
        input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
        form: "0px 1px 55px -11px rgba(0, 0, 0, 0.01)",
        pricing: "0px 0px 40px 0px rgba(0, 0, 0, 0.08)",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        testimonial: "0px 10px 20px 0px rgba(92, 115, 160, 0.07)",
        "testimonial-btn": "0px 8px 15px 0px rgba(72, 72, 138, 0.08)",
        1: "0px 1px 3px 0px rgba(166, 175, 195, 0.40)",
        2: "0px 5px 12px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
	plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.rajdhani-light': {
          fontFamily: 'Rajdhani, sans-serif',
          fontWeight: 300,
        },
        '.rajdhani-regular': {
          fontFamily: 'Rajdhani, sans-serif',
          fontWeight: 400,
        },
        '.rajdhani-medium': {
          fontFamily: 'Rajdhani, sans-serif',
          fontWeight: 500,
        },
        '.rajdhani-semibold': {
          fontFamily: 'Rajdhani, sans-serif',
          fontWeight: 600,
        },
        '.rajdhani-bold': {
          fontFamily: 'Rajdhani, sans-serif',
          fontWeight: 700,
        },
        '.image-gradient-border': {
          position: 'relative',
          display: 'inline-block',
        },
        '.image-gradient-border::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          borderRadius: '8px', // Adjust as needed
          padding: '4px', // Adjust as needed
          background: 'linear-gradient(45deg, rgba(255, 0, 0, 0.5), rgba(0, 255, 0, 0.5))',
          '-webkit-mask': 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          '-webkit-mask-composite': 'xor',
          'mask-composite': 'exclude', // For Firefox
          pointerEvents: 'none',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}
