import styles from './Card.module.less';

const Card = {
  name: 'KzzCard',

  props: {
    bodyStyle: {
      type: [Object, String],
    },
    headerStyle: {
      type: [Object, String],
    },
    title: {},
  },

  render() {
    const { bodyStyle, headerStyle } = this;
    const { extra, body: bodySlot, default: defaultSlot } = this.$slots;
    const title = this.$slots.title || this.title;
    const body = defaultSlot || bodySlot;
    return (
      <div class={styles.root}>
        {title && (
          <div class={styles.header} style={headerStyle}>
            <div class={styles.title}>{title}</div>
            {extra && <div class={styles.extra}>{extra}</div>}
          </div>
        )}

        {body && (
          <div class={styles.body} style={bodyStyle}>
            {body}
          </div>
        )}
      </div>
    );
  },
};

export default Card;
