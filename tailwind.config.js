module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#26c6da", // น้ำเงินเขียว
        sec: "#4dd0e1", // น้ำเงินเขียวเข้ม
        accent: "#FFDEDE", // ชมพูพาสเทล
        textDark: "#333333", // สีเทาเข้ม (ตัวอักษร)
        textLight: "#FFFFFF", // สีขาว
        bgwhite: "#b2ebf2", // สีน้ำเงินเกือบขาว
      },
    },
  },
  plugins: [],
};
