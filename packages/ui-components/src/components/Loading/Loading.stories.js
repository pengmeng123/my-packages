import Loading from "./Loading";

export default {
  title: "Loading 加载",
  component: Loading,
  parameters: {
    docs: {
      description: {
        component: "加载组件，用于标识加载状态。",
      },
    },
  },
};

export const 基础用法 = () => ({
  components: { pLoading: Loading },
  template: `
    <p-loading />
  `,
  methods: {},
});
基础用法.parameters = {
  docs: {
    source: {
      code: `<template>
  <p-loading />
</template>`,
    },
  },
};
