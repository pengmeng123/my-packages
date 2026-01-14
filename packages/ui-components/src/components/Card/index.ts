import { VueConstructor } from "vue";

import Card from "./Card";

(Card as any).install = function (Vue: VueConstructor): void {
  Vue.component("PCard", Card);
};

export default Card;
