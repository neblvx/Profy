/** @type {import('tailwindcss').Config} */
export default {
  content: [
    `@/components/**/*.{vue,js,ts}`,
    `@/layouts/**/*.vue`,
    `@/pages/**/*.vue`,
    `@/composables/**/*.{js,ts}`,
    `@/plugins/**/*.{js,ts}`,
    `@/utils/**/*.{js,ts}`,
    `@/App.{js,ts,vue}`,
    `@/app.{js,ts,vue}`,
    `@/Error.{js,ts,vue}`,
    `@/error.{js,ts,vue}`,
    `@/app.config.{js,ts}`,
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "dark",
    themes: [
      {
        light: {
          primary: "#1d4ed8",
          secondary: "#be185d",
          accent: "#6d28d9",
          neutral: "#c0cff6",
          "base-100": "#e9eefc",
          info: "#5078e7",
          success: "#50e797",
          warning: "#e7b250",
          error: "#e75050",
        },
        dark: {
          primary: "#1d4ed8",
          secondary: "#be185d",
          accent: "#6d28d9",
          neutral: "#0d0914",
          "base-100": "#0d0914",
          info: "#5078e7",
          success: "#50e797",
          warning: "#e7b250",
          error: "#e75050",
        },
      },
    ],
  },
};
