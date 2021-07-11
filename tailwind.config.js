module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: ["./src/**/*.js", "./src/**/**/*.js"],
  },
  theme: {
    fill: (theme) => ({
      red: theme("colors.red.primary"),
    }),
    colors: {
      white: "#ffffff",
      blue: {
        primary: "#005c98",
        medium: "#005c98",
      },
      black: {
        light: "#262626",
        faded: "#00000059",
      },
      gray: {
        base: "#616161",
        background: "#fafafa",
        primary: "#dbdbdb",
        light: "#f0f0f0",
        dark: "#5c5c5c",
      },
      red: {
        primary: "#ed4956",
      },
      brown: {
        primary: "#614824",
        background: "#f7f2e4",
      },
      green: {
        primary: "#16ab4f",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
};
