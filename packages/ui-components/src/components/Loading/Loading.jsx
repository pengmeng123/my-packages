import Vue from "vue";
import styles from "./Loading.module.less";

import part1 from "./images/part-1-minified.svg";
import part2 from "./images/part-2-minified.svg";
import part3 from "./images/part-3-minified.svg";

export default {
  name: "KzzLoading",
  functional: true,
  props: {
    /**
     * 'small','default','large'
     */
    size: {
      type: String,
      default: "default",
    },
  },
  render(h, { props }) {
    return (
      <span
        class={{
          [styles.root]: true,
          [styles.rootSm]: props.size === "small",
          [styles.rootLg]: props.size === "large",
        }}
        style={{
          width: props.size,
          height: props.size,
        }}
      >
        <img src={part1} />
        <img src={part2} />
        <img src={part3} />
      </span>
    );
  },
};
