// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "@nuxt/image-edge", "@nuxtjs/i18n"],
  buildModules: ["@nuxtjs/google-fonts"],

  googleFonts: {
    families: {
      Roboto: true,
      "Averia+Serif+Libre": {
        wght: [400],
      },
      Inter: {
        wght: [400, 500, 600],
      },
    },
  },

  i18n: {
    strategy: "prefix_except_default",
    locales: [
      {
        code: "ro",
        file: "ro.json",
      },
    ],
    defaultLocale: "ro", // default locale of your project for Nuxt pages and routings
    detectBrowserLanguage: false,
    langDir: "lang",
  },

  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: false, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,
    theme: {
      colors: {
        green: {
          10: "#DDDCD3",
          16: "#D1D1C7",
          24: "#C3C3B9",
          40: "#A3A79C",
          60: "#7D8478",
          100: "#303E30",
        },
        greenDarker:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.16)), #303E30;",
        cream: "#F0EDE4",
        orange: "#EC5C1F",
        orangeHover: "#F88758",
        orangeDarker:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)), #EC5C1F;",
      },

      breakpoints: {
        sm: "600px",
        md: "640px",
      },
    },
  },
});
