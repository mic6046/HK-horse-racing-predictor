/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#111827",
        jade: "#0F7A5C",
        gold: "#C8962F",
        harbor: "#2563EB",
        coral: "#E45757",
      },
      boxShadow: {
        panel: "0 18px 60px rgba(15, 23, 42, 0.10)",
      },
    },
  },
  plugins: [],
};
