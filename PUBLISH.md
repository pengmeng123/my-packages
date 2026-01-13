# 发布指南

本文档说明如何将包发布到私有 npm 仓库。

## 前置准备

### 1. 配置 npm registry

项目已配置 `.npmrc` 文件，默认使用 `http://172.16.183.334:9999` 作为 `@pengmeng` 作用域的私有仓库。

如果需要修改仓库地址，请编辑 `.npmrc` 文件：

```ini
@pengmeng:registry=http://your-npm-registry.com:4873
```

### 2. 登录 npm 仓库

在发布前，需要先登录到你的 npm 仓库：

```bash
# 使用 npm 登录
npm login --registry=http://172.16.183.334:9999

# 或者使用 pnpm 登录
pnpm login --registry=http://172.16.183.334:9999
```

如果仓库需要认证 token，可以在 `.npmrc` 中配置：

```ini
//your-npm-registry.com:4873/:_authToken=your-auth-token
```

### 3. 构建项目

发布前需要先构建所有包：

```bash
pnpm run build
```

## 发布方式

### 方式一：使用 pnpm 发布（推荐）

#### 发布所有包

```bash
# 构建并发布所有包
pnpm run publish:all
```

#### 单独发布某个包

```bash
# 发布工具库
pnpm run publish:utils

# 发布组件库
pnpm run publish:components
```

#### 手动发布

```bash
# 进入包目录
cd packages/utils
# 或
cd packages/ui-components

# 发布
pnpm publish --no-git-checks
```

### 方式二：使用 lerna 发布

如果项目安装了 lerna，可以使用 lerna 发布：

```bash
# 安装 lerna（如果未安装）
pnpm add -D -w lerna

# 发布所有变更的包
npx lerna publish

# 发布指定版本
npx lerna publish patch  # 0.0.1 -> 0.0.2
npx lerna publish minor  # 0.0.1 -> 0.1.0
npx lerna publish major  # 0.0.1 -> 1.0.0
```

## 发布流程

1. **更新版本号**

   在发布前，手动更新 `packages/*/package.json` 中的 `version` 字段，或者使用 lerna 自动管理版本。

2. **构建项目**

   ```bash
   pnpm run build
   ```

3. **检查构建产物**

   确保 `lib/` 和 `es/` 目录存在且包含正确的文件。

4. **发布**

   ```bash
   # 发布所有包
   pnpm run publish:all
   
   # 或单独发布
   pnpm run publish:utils
   pnpm run publish:components
   ```

5. **验证发布**

   在另一个项目中测试安装：

   ```bash
   pnpm add @pengmeng/ui-components --registry=http://172.16.183.334:9999
   pnpm add @pengmeng/ui-utils --registry=http://172.16.183.334:9999
   ```

## 注意事项

1. **版本号管理**

   - 项目使用 `independent` 版本模式，每个包可以独立管理版本
   - 发布前记得更新版本号

2. **构建产物**

   - 确保 `files` 字段包含需要发布的文件（`lib`、`es`）
   - 不要发布 `node_modules`、`src` 等开发文件

3. **依赖关系**

   - `@pengmeng/ui-components` 依赖 `@pengmeng/ui-utils`
   - 发布时注意发布顺序：先发布 `ui-utils`，再发布 `ui-components`

4. **认证问题**

   - 如果遇到 401/403 错误，检查登录状态和 token 配置
   - 确保有发布权限

5. **网络问题**

   - 如果仓库地址无法访问，检查 `.npmrc` 和 `lerna.json` 中的 registry 配置
   - 确保仓库地址正确且可访问

## 常见问题

### Q: 发布时提示 "You must sign up for private packages"

A: 检查是否已登录，运行 `npm login` 或 `pnpm login`

### Q: 发布时提示 404 错误

A: 检查 registry 地址是否正确，确保仓库服务正在运行

### Q: 如何发布 beta 版本？

A: 使用 `pnpm publish --tag beta` 或修改版本号为 `0.0.1-beta.1`

### Q: 如何撤销已发布的版本？

A: 大多数私有仓库不支持撤销，建议发布新版本修复问题

