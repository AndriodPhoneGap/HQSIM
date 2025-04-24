import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "编程",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure", 
      collapsible: true, 
    }, 
    {
      text: "三农",
      icon: "laptop-code",
      prefix: "三农/",
      link: "三农/",
      children: "structure", 
      collapsible: true, 
    },
    {
      text: "情感",
      icon: "laptop-code",
      prefix: "情感/",
      link: "情感/",
      children: "structure", 
      collapsible: true, 
    },
    {
      text: "生活",
      icon: "laptop-code",
      prefix: "生活/",
      link: "生活/",
      children: "structure", 
      collapsible: true, 
    },
    {
      text: "科技",
      icon: "laptop-code",
      prefix: "科技/",
      link: "科技/",
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
