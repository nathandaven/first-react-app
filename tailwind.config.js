module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        circlebg: "url('./Media/circlebg.svg')",
        circlebgfull: "url('./Media/circlebg-full.svg')",
      }),
      backgroundSize: {
        "50%": "50%",
        16: "4rem",
        circle: "auto 36em",
      },
      fontFamily: {
        sans: ["Red Hat Display", "-apple-system", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
