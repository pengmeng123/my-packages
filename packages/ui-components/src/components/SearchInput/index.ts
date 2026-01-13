import { VueConstructor } from 'vue';
import SearchInput from './SearchInput';

export type { SearchInputProps } from './SearchInput';

(SearchInput as any).install = function (Vue: VueConstructor): void {
  Vue.component('KzzSearchInput', SearchInput);
};

export default SearchInput;

