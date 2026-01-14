import Vue, { VNode, CreateElement, PropType } from "vue";
import { Input, Button } from "ant-design-vue";
import styles from "./SearchInput.module.less";

export interface SearchInputProps {
  value?: string;
  placeholder?: string;
  allowClear?: boolean;
  loading?: boolean;
  disabled?: boolean;
  buttonText?: string;
}

//2222

export default Vue.extend({
  name: "PSearchInput",

  model: {
    prop: "value",
    event: "change",
  },

  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "请输入搜索内容",
    },
    allowClear: {
      type: Boolean,
      default: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    buttonText: {
      type: String,
      default: "搜索",
    },
  },

  data() {
    return {
      inputValue: this.value,
    };
  },

  watch: {
    value(val: string) {
      this.inputValue = val;
    },
  },

  methods: {
    handleInput(e: Event) {
      const target = e.target as HTMLInputElement;
      this.inputValue = target.value;
      this.$emit("change", target.value);
    },

    handleSearch() {
      if (this.disabled || this.loading) return;
      this.$emit("search", this.inputValue);
    },

    handleKeyPress(e: KeyboardEvent) {
      if (e.key === "Enter") {
        this.handleSearch();
      }
    },

    handleClear() {
      this.inputValue = "";
      this.$emit("change", "");
      this.$emit("clear");
    },
  },

  render(h: CreateElement): VNode {
    const {
      inputValue,
      placeholder,
      allowClear,
      loading,
      disabled,
      buttonText,
    } = this;

    return (
      <div class={styles.searchInput}>
        <Input
          class={styles.input}
          value={inputValue}
          placeholder={placeholder}
          allowClear={allowClear}
          disabled={disabled}
          onInput={this.handleInput}
          onKeypress={this.handleKeyPress}
          onChange={(e: any) => {
            if (!e.target.value && allowClear) {
              this.handleClear();
            }
          }}
        />
        <Button
          class={styles.button}
          type="primary"
          loading={loading}
          disabled={disabled}
          onClick={this.handleSearch}
        >
          {buttonText}
        </Button>
      </div>
    );
  },
});
