import SearchInput from "./SearchInput";

export default {
  title: "SearchInput 搜索框",
  component: SearchInput,
  parameters: {
    docs: {
      description: {
        component: "搜索输入框，支持输入关键词并触发搜索。",
      },
    },
  },
  argTypes: {
    value: {
      control: "text",
      description: "输入值（支持 v-model）",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    placeholder: {
      control: "text",
      description: "占位文本",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "请输入搜索内容" },
      },
    },
    buttonText: {
      control: "text",
      description: "按钮文字",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "搜索" },
      },
    },
    allowClear: {
      control: "boolean",
      description: "允许清除",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    loading: {
      control: "boolean",
      description: "加载状态",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "禁用状态",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
};

// 基础用法
export const 基础用法 = () => ({
  components: { PSearchInput: SearchInput },
  template: `
    <p-search-input placeholder="请输入企业名称" @search="onSearch" />
  `,
  methods: {
    onSearch(value: string) {
      alert("搜索: " + value);
    },
  },
});
基础用法.parameters = {
  docs: {
    source: {
      code: `<template>
  <p-search-input 
    placeholder="请输入企业名称" 
    @search="onSearch" 
  />
</template>

<script>
export default {
  methods: {
    onSearch(value) {
      console.log('搜索:', value);
    },
  },
};
</script>`,
    },
  },
};

// 加载状态
export const 加载状态 = () => ({
  components: { PSearchInput: SearchInput },
  template: `
    <p-search-input loading placeholder="搜索中..." />
  `,
});
加载状态.parameters = {
  docs: {
    source: {
      code: `<template>
  <p-search-input loading placeholder="搜索中..." />
</template>

<script>
export default {
  // loading: true 显示加载状态
};
</script>`,
    },
  },
};

// 禁用状态
export const 禁用状态 = () => ({
  components: { PSearchInput: SearchInput },
  template: `
    <p-search-input disabled placeholder="已禁用" />
  `,
});
禁用状态.parameters = {
  docs: {
    source: {
      code: `<template>
  <p-search-input disabled placeholder="已禁用" />
</template>

<script>
export default {
  // disabled: true 禁用输入框
};
</script>`,
    },
  },
};

// 自定义按钮文字
export const 自定义按钮 = () => ({
  components: { PSearchInput: SearchInput },
  template: `
    <p-search-input button-text="查询" placeholder="输入关键词" />
  `,
});
自定义按钮.parameters = {
  docs: {
    source: {
      code: `<template>
  <p-search-input 
    button-text="查询" 
    placeholder="输入关键词" 
  />
</template>

<script>
export default {
  // button-text 自定义按钮文字
};
</script>`,
    },
  },
};

// 双向绑定
export const 双向绑定 = () => ({
  components: { PSearchInput: SearchInput },
  data() {
    return { keyword: "阿里巴巴" };
  },
  template: `
    <div>
      <p-search-input v-model="keyword" @search="onSearch" />
      <p style="margin-top: 12px; color: #666;">当前值: {{ keyword }}</p>
    </div>
  `,
  methods: {
    onSearch(value: string) {
      alert("搜索: " + value);
    },
  },
});
双向绑定.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <p-search-input v-model="keyword" @search="onSearch" />
    <p>当前值: {{ keyword }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: '阿里巴巴',
    };
  },
  methods: {
    onSearch(value) {
      console.log('搜索:', value);
    },
  },
};
</script>`,
    },
  },
};
