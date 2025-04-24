import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  "/zh/demo/",
  , 
  {
    text: "三农",
    link: "/zh/三农/README.md",
    icon: "featuresNew",
  },
  {
    text: "情感",
    link: "/zh/情感/README.md",
    icon: "featuresNew",
  }, 
  {
    text: "生活",
    link: "/zh/生活/README.md",
    icon: "featuresNew",
  }, 
  {
    text: "科技",
    link: "/zh/科技/README.md",
    icon: "featuresNew",
  }, 
  {
    text: "ShopPing",
    icon: "shopping", 
    link: "https://shop.hqsim.com",
  },
]);
