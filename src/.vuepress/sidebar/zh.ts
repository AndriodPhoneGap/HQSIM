import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "编程语言",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure", 
      collapsible: true, 
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
      collapsible: true,
    },
    "intro",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    },
  ],
});
