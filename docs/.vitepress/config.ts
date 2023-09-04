import { defineConfig } from "vitepress";
import nav from "./config/nav";
import sidebar from "./config/sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Learn VitePress",
  description: "A VitePress Site",
  lastUpdated: true, // 需要提交markdown文件才能看到更新时间。

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav, // 导航
    sidebar, // 侧边栏
    logo: "/logo.svg", // 导航栏左上角链接左边的图标
    search: {
      // 本地搜索
      provider: "local",
    },
    socialLinks: [
      // 在导航中显示带有图标的社交帐户链接
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
      { icon: "twitter", link: "https://twitter.com/vuejs" },
      { icon: "discord", link: "https://discord.com/invite/HBherRA" },
    ],
    editLink: {
      // 编辑链接
      pattern: "https://github.com/vuejs/vitepress",
      text: "在 GitHub 上编辑此页",
    },
    footer: {
      // home布局下面的页脚
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023 skyblue",
    },
    carbonAds: {
      // 广告
      code: "your-carbon-code",
      placement: "your-carbon-placement",
    },
    docFooter: {
      // 文档页脚上一个/下一个的文本描述
      prev: "上一个页面",
      next: "下一个页面",
    },
  },
});
