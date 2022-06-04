const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    spacing: {
      "9/16": "56.25%",
    },
    lineHeight: {
      11: "2.75rem",
      12: "3rem",
      13: "3.25rem",
      14: "3.5rem",
    },
    colors: {
      dark: "#111826",
      light: "#FFFFFF",
      orange: "#F2BB16",
      green: "#A5D936",
      purple: "#B080F2",
      pink: "#F277BB",
      gray: {
        850: "#18212F",
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
    // typography: (theme) => ({
    //   DEFAULT: {
    //     css: {
    //       color: theme("colors.gray.700"),
    //       a: {
    //         color: theme("colors.primary.500"),
    //         "&:hover": {
    //           color: theme("colors.primary.600"),
    //         },
    //         code: { color: theme("colors.primary.400") },
    //       },
    //       h1: {
    //         fontWeight: "700",
    //         letterSpacing: theme("letterSpacing.tight"),
    //         color: theme("colors.white.900"),
    //       },
    //       h2: {
    //         fontWeight: "700",
    //         letterSpacing: theme("letterSpacing.tight"),
    //         color: theme("colors.gray.900"),
    //       },
    //       h3: {
    //         fontWeight: "600",
    //         color: theme("colors.gray.900"),
    //       },
    //       "h4,h5,h6": {
    //         color: theme("colors.gray.900"),
    //       },
    //       code: {
    //         color: theme("colors.primary.500"),
    //         backgroundColor: theme("colors.primary.100"),
    //         paddingLeft: "4px",
    //         paddingRight: "4px",
    //         paddingTop: "2px",
    //         paddingBottom: "2px",
    //         borderRadius: "4px",
    //       },
    //       "code:before": {
    //         content: "none",
    //       },
    //       "code:after": {
    //         content: "none",
    //       },
    //       details: {
    //         backgroundColor: theme("colors.gray.100"),
    //         paddingLeft: "4px",
    //         paddingRight: "4px",
    //         paddingTop: "2px",
    //         paddingBottom: "2px",
    //         borderRadius: "0.25rem",
    //       },
    //       hr: { borderColor: theme("colors.gray.200") },
    //       "ol li:before": {
    //         fontWeight: "600",
    //         color: theme("colors.gray.500"),
    //       },
    //       "ul li:before": {
    //         backgroundColor: theme("colors.gray.500"),
    //       },
    //       strong: { color: theme("colors.gray.600") },
    //       blockquote: {
    //         color: theme("colors.gray.900"),
    //         borderLeftColor: theme("colors.gray.200"),
    //       },
    //     },
    //   },
    //   dark: {
    //     css: {
    //       color: theme("colors.gray.300"),
    //       a: {
    //         color: theme("colors.primary.500"),
    //         "&:hover": {
    //           color: theme("colors.primary.400"),
    //         },
    //         code: { color: theme("colors.primary.400") },
    //       },
    //       h1: {
    //         fontWeight: "700",
    //         letterSpacing: theme("letterSpacing.tight"),
    //         color: theme("colors.gray.100"),
    //       },
    //       h2: {
    //         fontWeight: "700",
    //         letterSpacing: theme("letterSpacing.tight"),
    //         color: theme("colors.gray.100"),
    //       },
    //       h3: {
    //         fontWeight: "600",
    //         color: theme("colors.gray.100"),
    //       },
    //       "h4,h5,h6": {
    //         color: theme("colors.gray.100"),
    //       },
    //       code: {
    //         backgroundColor: theme("colors.gray.800"),
    //       },
    //       details: {
    //         backgroundColor: theme("colors.gray.800"),
    //       },
    //       hr: { borderColor: theme("colors.gray.700") },
    //       "ol li:before": {
    //         fontWeight: "600",
    //         color: theme("colors.gray.400"),
    //       },
    //       "ul li:before": {
    //         backgroundColor: theme("colors.gray.400"),
    //       },
    //       strong: { color: theme("colors.gray.100") },
    //       thead: {
    //         color: theme("colors.gray.100"),
    //       },
    //       tbody: {
    //         tr: {
    //           borderBottomColor: theme("colors.gray.700"),
    //         },
    //       },
    //       blockquote: {
    //         color: theme("colors.gray.100"),
    //         borderLeftColor: theme("colors.gray.700"),
    //       },
    //     },
    //   },
    // }),
  },
  plugins: [require("@tailwindcss/typography")],
};