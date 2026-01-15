# @pengmeng/ui-components

企业级 Vue 2 UI 组件库

## 📖 在线文档

📖 查看 [Storybook 组件文档](https://pengmeng123.github.io/my-packages/storybook/) 了解所有组件的使用方法和示例。

## 特性

- 🚀 基于 Vue 2 + TypeScript 开发
- 📦 支持 ESM 和 CommonJS 双模块输出
- 🎨 使用 Less + CSS Modules 样式方案
- 📝 完整的 TypeScript 类型定义
- 🔧 可按需引入组件

## 安装

```bash
pnpm add @pengmeng/ui-components
```

## 使用

### 全量引入

```typescript
import Vue from 'vue';
import UIComponents from '@pengmeng/ui-components';
import '@pengmeng/ui-components/es/index.css';

Vue.use(UIComponents);
```

### 按需引入

```typescript
import Vue from 'vue';
import { Button } from '@pengmeng/ui-components';
import '@pengmeng/ui-components/es/index.css';

Vue.use(Button);
// 或
Vue.component('PButton', Button);
```

### 在模板中使用

```vue
<template>
  <div>
    <p-button type="primary">主要按钮</p-button>
    <p-button>默认按钮</p-button>
    <p-button type="dashed">虚线按钮</p-button>
    <p-button type="text">文字按钮</p-button>
    <p-button type="link">链接按钮</p-button>
  </div>
</template>
```

## 组件列表

| 组件 | 描述 |
|------|------|
| Button | 按钮组件 |

## 开发

```bash
# 安装依赖
pnpm install

# 生成入口文件
pnpm run build:entry

# 构建
pnpm run build

# 清理构建产物
pnpm run clean
```

## 添加新组件

1. 在 `src/components/` 下创建组件目录，例如 `Input/`
2. 创建以下文件：
   - `Input.tsx` - 组件实现
   - `Input.module.less` - 组件样式
   - `index.ts` - 组件导出

3. 运行 `pnpm run build:entry` 自动更新入口文件

### 组件模板

```typescript
// src/components/Input/Input.tsx
import { VNode, CreateElement } from 'vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
import styles from './Input.module.less';

@Component({
  name: 'PInput',
})
export default class Input extends Vue {
  @Prop({ type: String, default: '' })
  readonly value!: string;

  render(h: CreateElement): VNode {
    return (
      <input
        class={styles.input}
        value={this.value}
        onInput={(e: Event) => this.$emit('input', (e.target as HTMLInputElement).value)}
      />
    );
  }
}
```

```typescript
// src/components/Input/index.ts
import { VueConstructor } from 'vue';
import Input from './Input';

(Input as any).install = function (Vue: VueConstructor): void {
  Vue.component(Input.name || 'PInput', Input);
};

export default Input;
```

## 目录结构

```
ui-components/
├── src/
│   ├── components/          # 组件目录
│   │   └── Button/          # 按钮组件
│   │       ├── Button.tsx
│   │       ├── Button.module.less
│   │       └── index.ts
│   ├── styles/              # 全局样式
│   │   ├── index.less
│   │   └── vars.less
│   └── index.ts             # 入口文件（自动生成）
├── scripts/
│   └── generate-entry.js    # 入口生成脚本
├── es/                      # ESM 构建产物
├── lib/                     # CJS 构建产物
├── package.json
├── tsconfig.json
├── rollup.config.js
└── README.md
```

## 许可证

UNLICENSED

