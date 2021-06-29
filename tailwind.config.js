module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    /*
    fontFamily: {
      
      sans: "-apple-system, BlinkMacSystemFont , sans-serif",
      mono: ",mono",
      
    },*/
    colors: {
      primarygrey: "var(--primary--grey)",
      white: "var(--white)",
      secondarygrey: "var(--secondary--grey)",
      codeyellow: "var(--codeyellow)",
      codesand: "var(--codesand)",
      codemustard: "var(--codemustard)",
      codegreen: "var(--codegreen)",
      codeblue: "var(--codeblue)",
      codewhite: "var(--codewhite)",
      codepink: "var(--codepink)",
      codeorange: "var(--codeorange)",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
