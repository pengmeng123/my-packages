import Vue, { VNode, CreateElement, PropType } from 'vue';
import styles from './Button.module.less';

export type ButtonType = 'primary' | 'default' | 'dashed' | 'text' | 'link';
export type ButtonSize = 'large' | 'default' | 'small';

export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  danger?: boolean;
  block?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
}

export default Vue.extend({
  name: 'KzzButton',

  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: 'default',
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    danger: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    htmlType: {
      type: String as PropType<'button' | 'submit' | 'reset'>,
      default: 'button',
    },
  },

  methods: {
    handleClick(event: MouseEvent): void {
      if (this.disabled || this.loading) {
        event.preventDefault();
        return;
      }
      this.$emit('click', event);
    },
  },

  render(h: CreateElement): VNode {
    const { type, size, disabled, loading, danger, block, htmlType } = this;

    const classes = [
      styles.button,
      styles[type],
      {
        [styles.large]: size === 'large',
        [styles.small]: size === 'small',
        [styles.disabled]: disabled,
        [styles.loading]: loading,
        [styles.danger]: danger,
        [styles.block]: block,
      },
    ];

    // 加载图标
    const loadingIcon = loading ? (
      <span class={styles.loadingIcon}>
        <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
          <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874.7 150.7c47.8 47.8 85.5 103.5 112.1 165.5 26.8 63.1 40.3 130.2 40.3 199.3 0 19.9-16.1 36-36 36z" />
        </svg>
      </span>
    ) : null;

    return (
      <button type={htmlType} class={classes} disabled={disabled} onClick={this.handleClick}>
        {loadingIcon}
        {this.$slots.default}
      </button>
    );
  },
});
