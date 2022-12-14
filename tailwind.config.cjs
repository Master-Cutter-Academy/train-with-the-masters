/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("prettier-plugin-tailwindcss"),
  ],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: "",
    themes: [
      // Annoated in the comments are the selected daisyUI base theme's default colors
      {
        light: {
          //...require("daisyui/src/colors/themes")["[data-theme=autumn]"], // Autumn base theme
          primary: "#fff",
          "primary-content": "#000",
          secondary: "#9E090A",
          // "secondary-dark": "#980011",
          "secondary-content": "#fff",
          accent: "#d1d1d1",
          "accent-content": "#000",
          // neutral: "#826A5C",
          // "base-100": "#f1f1f1",
          // info: "#42ADBB",
          // success: "#499380",
          // warning: "#E97F14",
          // error: "#DF1A2F",
        },
      },
      {
        dark: {
          // ...require("daisyui/src/colors/themes")["[data-theme=luxury]"], // Luxury base theme
          // primary: "#ffffff",
          primary: "#fff",
          "primary-content": "#000",
          secondary: "#9E090A",
          // "secondary-content-dark": "#980011",
          "secondary-content": "#fff",
          accent: "#d1d1d1",
          "accent-content": "#000",
          // accent: "#513448",
          // neutral: "#171618",
          // "neutral-content": "#dca54c",
          // "base-100": "#09090b",
          // "base-200": "#171618",
          // "base-300": "#2e2d2f",
          // "base-content": "#dca54c",
          // info: "#66c6ff",
          // success: "#87d039",
          // warning: "#e2d562",
          // error: "#ff6f6f",
        },
      },
    ],
    darkTheme: "dark",
  },
};
