// Vue 组件类型声明
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

// JSX 类型增强
import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

