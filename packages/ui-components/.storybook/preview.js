import Vue from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '../src/styles/index.less';

Vue.use(Antd);

export const parameters = {
  // 默认显示 Docs 页面
  viewMode: 'docs',
  // 隐藏 Canvas 标签
  previewTabs: {
    canvas: { hidden: true },
  },
  // 文档配置
  docs: {
    // 显示源代码
    source: {
      state: 'open',
    },
  },
  controls: {
    // 显示参数描述
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
