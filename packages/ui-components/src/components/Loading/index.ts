import { VueConstructor } from "vue";

import Loading from "./Loading";

(Loading as any).install = function (Vue: VueConstructor): void {
  Vue.component("PLoading", Loading);
};

export default Loading;
