import { VueConstructor } from "vue";
import SearchInput from "./SearchInput";

(SearchInput as any).install = function (Vue: VueConstructor): void {
  Vue.component("PSearchInput", SearchInput);
};

export default SearchInput;
