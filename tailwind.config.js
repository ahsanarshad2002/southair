/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      screens: {
        // Mobile default (<768px)

        md: "768px",      // Tablet

        lg: "1024px",     // Laptop Small

        xl: "1280px",     // Laptop Large (1280–1399)

        "2xl": "1400px",  // Laptop Large 2 (1400–1599)

        "3xl": "1600px",  // Desktop (1600–2K)
      },
    },
  },
};