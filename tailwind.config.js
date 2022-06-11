const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./content/**/*.md",
    "./content/**/*.html",
    "./src/**/*.js",
  ],
  // make sure to safelist these classes when using purge
  safelist: [
    "w-64",
    "w-1/2",
    "rounded-l-lg",
    "rounded-r-lg",
    "bg-gray-200",
    "grid-cols-4",
    "grid-cols-7",
    "h-6",
    "leading-6",
    "h-9",
    "leading-9",
    "shadow-lg",
  ],
  // enable dark mode via class strategy
  darkMode: "class",
  theme: {
    lineHeight: {
      11: "2.75rem",
      12: "3rem",
      13: "3.25rem",
      14: "3.5rem",
    },
    colors: {
      gray: colors.gray,
      blue: colors.blue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
      serif: ["Merriweather", "serif"],
    },
    // Extend base Tailwind CSS Utility classes
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("flowbite/plugin"),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
      addVariant("not-last", "&:not(:last-child)");
    },
  ],
  // variants: {
  //   fill: [],
  //   extend: {
  //     borderColor: ["focus-visible"],
  //     opacity: ["disabled"],
  //   },
  // },
};
