/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('./assets/images/png-transparent-calligraphy-eid-al-fitr-eid-mubarak-eid-al-adha-eid-mubarak-caligraphy-text-logo-monochrome-thumbnail.png')",
        "footer-texture": "url('./assets/images/202-2026540_islam-eid-al-fitr-design-eid-al-adha.png')",
        "money": "url('./assets/images/money.webp')",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
