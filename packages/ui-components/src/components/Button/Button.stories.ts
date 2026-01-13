import Button from './Button';

export default {
  title: 'Button 按钮',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: '按钮组件，用于触发操作。',
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'default', 'dashed', 'text', 'link'],
      description: '按钮类型',
      table: {
        type: { summary: 'primary | default | dashed | text | link' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'default', 'small'],
      description: '按钮尺寸',
      table: {
        type: { summary: 'large | default | small' },
        defaultValue: { summary: 'default' },
      },
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: 'boolean',
      description: '是否加载中',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    danger: {
      control: 'boolean',
      description: '是否危险按钮',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    block: {
      control: 'boolean',
      description: '是否块级按钮',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

// 基础用法
export const 基础用法 = () => ({
  components: { KzzButton: Button },
  template: `
    <div style="display: flex; gap: 12px;">
      <kzz-button type="primary">主要按钮</kzz-button>
      <kzz-button>默认按钮</kzz-button>
      <kzz-button type="dashed">虚线按钮</kzz-button>
      <kzz-button type="text">文字按钮</kzz-button>
      <kzz-button type="link">链接按钮</kzz-button>
    </div>
  `,
});
基础用法.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <kzz-button type="primary">主要按钮</kzz-button>
    <kzz-button>默认按钮</kzz-button>
    <kzz-button type="dashed">虚线按钮</kzz-button>
    <kzz-button type="text">文字按钮</kzz-button>
    <kzz-button type="link">链接按钮</kzz-button>
  </div>
</template>

<script>
export default {
  // 使用组件
};
</script>`,
    },
  },
};

// 按钮尺寸
export const 按钮尺寸 = () => ({
  components: { KzzButton: Button },
  template: `
    <div style="display: flex; gap: 12px; align-items: center;">
      <kzz-button type="primary" size="large">大号按钮</kzz-button>
      <kzz-button type="primary">默认按钮</kzz-button>
      <kzz-button type="primary" size="small">小号按钮</kzz-button>
    </div>
  `,
});
按钮尺寸.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <kzz-button type="primary" size="large">大号按钮</kzz-button>
    <kzz-button type="primary">默认按钮</kzz-button>
    <kzz-button type="primary" size="small">小号按钮</kzz-button>
  </div>
</template>

<script>
export default {
  // size: large | default | small
};
</script>`,
    },
  },
};

// 禁用状态
export const 禁用状态 = () => ({
  components: { KzzButton: Button },
  template: `
    <div style="display: flex; gap: 12px;">
      <kzz-button type="primary" disabled>主要按钮</kzz-button>
      <kzz-button disabled>默认按钮</kzz-button>
      <kzz-button type="dashed" disabled>虚线按钮</kzz-button>
    </div>
  `,
});
禁用状态.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <kzz-button type="primary" disabled>主要按钮</kzz-button>
    <kzz-button disabled>默认按钮</kzz-button>
    <kzz-button type="dashed" disabled>虚线按钮</kzz-button>
  </div>
</template>

<script>
export default {
  // disabled: true
};
</script>`,
    },
  },
};

// 加载状态
export const 加载状态 = () => ({
  components: { KzzButton: Button },
  template: `
    <div style="display: flex; gap: 12px;">
      <kzz-button type="primary" loading>加载中</kzz-button>
      <kzz-button loading>加载中</kzz-button>
    </div>
  `,
});
加载状态.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <kzz-button type="primary" loading>加载中</kzz-button>
    <kzz-button loading>加载中</kzz-button>
  </div>
</template>

<script>
export default {
  // loading: true
};
</script>`,
    },
  },
};

// 危险按钮
export const 危险按钮 = () => ({
  components: { KzzButton: Button },
  template: `
    <div style="display: flex; gap: 12px;">
      <kzz-button type="primary" danger>危险按钮</kzz-button>
      <kzz-button danger>危险按钮</kzz-button>
      <kzz-button type="dashed" danger>危险按钮</kzz-button>
    </div>
  `,
});
危险按钮.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <kzz-button type="primary" danger>危险按钮</kzz-button>
    <kzz-button danger>危险按钮</kzz-button>
    <kzz-button type="dashed" danger>危险按钮</kzz-button>
  </div>
</template>

<script>
export default {
  // danger: true
};
</script>`,
    },
  },
};

// 块级按钮
export const 块级按钮 = () => ({
  components: { KzzButton: Button },
  template: `
    <div style="width: 300px;">
      <kzz-button type="primary" block style="margin-bottom: 12px;">主要按钮</kzz-button>
      <kzz-button block>默认按钮</kzz-button>
    </div>
  `,
});
块级按钮.parameters = {
  docs: {
    source: {
      code: `<template>
  <div style="width: 300px;">
    <kzz-button type="primary" block>主要按钮</kzz-button>
    <kzz-button block>默认按钮</kzz-button>
  </div>
</template>

<script>
export default {
  // block: true 将按钮宽度撑满父容器
};
</script>`,
    },
  },
};
