import { VueConstructor } from 'vue';
import Button from './Button';

export type { ButtonProps, ButtonType, ButtonSize } from './Button';

// Vue.use() 安装方法
(Button as any).install = function (Vue: VueConstructor): void {
  Vue.component('PButton', Button);
};

export default Button;
