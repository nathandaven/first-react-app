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
        circle: "auto 50%",
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
        codewhitedark: "var(--codewhitedark)",
        codepink: "var(--codepink)",
        codeorange: "var(--codeorange)",
      },
      minHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        screen50: "50vh",
        screen75: "75vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
