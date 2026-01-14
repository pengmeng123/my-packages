import Card from "./Card";

export default {
  title: "Card 加载",
  component: Card,
  parameters: {
    docs: {
      description: {
        component: "加载组件，用于标识加载状态。",
      },
    },
  },
};

export const 基础用法 = () => ({
  components: { pCard: Card },
  template: `
    <p-card title="我是标题">
    <div slot="extra">ssdfsf</div>
    我是内容</p-card>
  `,
  methods: {},
});
基础用法.parameters = {
  docs: {
    source: {
      code: `<template>
  <p-card title="我是标题">
    <div slot="extra">ssdfsf</div>
    我是内容</p-card>
</template>`,
    },
  },
};
