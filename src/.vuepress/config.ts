import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/HQSIM/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "HQSIM",
      description: "HQSIM的个人博客",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
