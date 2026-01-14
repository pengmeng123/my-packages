// Vue 组件类型声明
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

// JSX 文件类型声明（兼容 .jsx 文件）
declare module "*.jsx" {
  import Vue from "vue";
  const component: any;
  export default component;
}

// JSX 类型增强
import Vue, { VNode } from "vue";

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
