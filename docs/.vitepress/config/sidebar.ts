export default {
  "/guide/": getGuideSidebar(),
  "/components/": getComponentsSidebar(),
};

function getComponentsSidebar() {
  return [
    {
      text: "组件",
      items: [
        {
          text: "Button 按钮",
          link: "/components/button",
        },
        {
          text: "Tabs 标签页",
          link: "/components/tabs",
        },
        {
          text: "Modal 对话框",
          link: "/components/modal",
        },
        {
          text: "Tag 标签",
          link: "/components/tag",
        },
        {
          text: "Vue 引用组件",
          link: "/components/vue",
        },
        {
          text: "Vue Script",
          link: "/components/vue-script",
        },
      ],
    },
  ];
}

function getGuideSidebar() {
  return [
    {
      text: "指南",
      collapsed: false,
      items: [
        {
          text: "按钮",
          link: "/guide/button",
        },
        {
          text: "模态框",
          link: "/guide/modal",
        },
        {
          text: "成员",
          link: "/guide/team",
        },
      ],
    },
    {
      text: "指南",
      collapsed: false,
      items: [
        {
          text: "按钮",
          link: "/guide/button",
        },
        {
          text: "模态框",
          link: "/guide/modal",
        },
        {
          text: "成员",
          link: "/guide/team",
        },
      ],
    },
  ];
}
