/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6EF7C8",
        secondary: "#60A5FA",
        accent: "#F4F5EF",
        surface: "#FFFFFF",
        ink: "#111311",
        muted: "#60655F",
        border: "rgba(17, 19, 17, 0.13)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "Inter", "sans-serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 10px 60px rgba(110, 247, 200, 0.25)",
        card: "0 20px 80px rgba(17, 19, 17, 0.12)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 20% 20%, rgba(110, 247, 200, 0.4), transparent 35%), radial-gradient(circle at 80% 10%, rgba(96, 165, 250, 0.15), transparent 30%)",
      },
    },
  },
  plugins: [],
};
