# Lerna UI Packages

企业级 Vue 2 UI 组件库 Monorepo，使用 Lerna + pnpm 管理。

## 项目结构

```
lerna/
├── packages/
│   ├── ui-components/          # UI 组件库
│   │   ├── src/
│   │   │   ├── components/     # 组件
│   │   │   └── styles/         # 全局样式
│   │   ├── .storybook/         # Storybook 配置
│   │   └── package.json
│   └── utils/                  # 公共工具库
│       ├── src/
│       │   ├── dom.ts          # DOM 工具
│       │   ├── format.ts       # 格式化工具
│       │   ├── validate.ts     # 校验工具
│       │   └── classnames.ts   # 类名工具
│       └── package.json
├── lerna.json
├── pnpm-workspace.yaml
└── package.json
```

## 包列表

| 包名 | 描述 |
|------|------|
| `@pengmeng/ui-components` | Vue 2 UI 组件库 |
| `@pengmeng/ui-utils` | 公共工具函数（可独立使用） |

## 快速开始

```bash
# 进入目录
cd lerna

# 安装依赖
pnpm install

# 启动 Storybook 开发
pnpm dev

# 构建所有包
pnpm build
```

## 开发指南

### 启动 Storybook

```bash
# 启动组件库开发环境
pnpm dev
# 或者
cd packages/ui-components && pnpm storybook
```

访问 http://localhost:6006 查看组件预览。

### 构建

```bash
# 构建所有包
pnpm build

# 单独构建
pnpm run -r --filter "@pengmeng/ui-components" build
pnpm run -r --filter "@pengmeng/ui-utils" build
```

### 添加新组件

1. 在 `packages/ui-components/src/components/` 创建组件目录
2. 创建组件文件：`Component.tsx`、`Component.module.less`、`index.ts`
3. 创建 Story 文件：`Component.stories.tsx`
4. 运行 `pnpm run build:entry` 更新入口文件

### 添加工具函数

1. 在 `packages/utils/src/` 添加工具函数
2. 在 `packages/utils/src/index.ts` 导出
3. 工具库支持按需引入，不影响组件库体积

## 使用方式

### 组件库

```typescript
// 全量引入
import UIComponents from '@pengmeng/ui-components';
import '@pengmeng/ui-components/es/index.css';
Vue.use(UIComponents);

// 按需引入
import { Button } from '@pengmeng/ui-components';
Vue.use(Button);
```

### 工具库（独立使用）

```typescript
// 按需引入，支持 Tree-shaking
import { formatMoney, isPhone } from '@pengmeng/ui-utils';

formatMoney(1234.56); // => '¥1,234.56'
isPhone('13812345678'); // => true
```

## 技术栈

- Vue 2 + TypeScript
- Less + CSS Modules
- Rollup 打包
- Storybook 文档/预览
- Lerna + pnpm 管理 Monorepo

