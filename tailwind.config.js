/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./docs/**/*.{js,ts,jsx,tsx,vue}",
    "./.vitepress/**/*.{js,ts,jsx,vue}",
    "./**/*.md"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

