# npm 双因素认证（2FA）设置指南

## 问题说明

发布作用域包（scoped packages）到 npm 官方仓库时，npm 要求启用**双因素认证（2FA）**或使用 **granular access token**。

错误信息：
```
403 Forbidden - Two-factor authentication or granular access token with bypass 2fa enabled is required to publish packages.
```

## 解决方案

### 方案一：启用双因素认证（2FA）（推荐）

#### 步骤 1：登录 npm 官网

访问：https://www.npmjs.com/settings/pengmeng/security

#### 步骤 2：启用 2FA

1. 在安全设置页面，找到 "Two-Factor Authentication" 部分
2. 点击 "Enable 2FA" 或 "Edit"
3. 选择认证方式：
   - **Authenticator App**（推荐）：使用 Google Authenticator、Authy 等应用
   - **SMS**：使用手机短信

#### 步骤 3：配置 Authenticator App（推荐）

1. 使用手机扫描二维码
2. 输入应用生成的 6 位验证码确认
3. 保存恢复码（重要！）

#### 步骤 4：重新登录

启用 2FA 后，需要重新登录：

```bash
npm login --registry=https://registry.npmjs.org/
```

登录时会要求输入：
- Username
- Password
- One-time password（从 Authenticator App 获取的 6 位验证码）

### 方案二：使用 Granular Access Token（适合 CI/CD）

如果你不想启用 2FA，可以创建 granular access token：

#### 步骤 1：创建 Access Token

1. 访问：https://www.npmjs.com/settings/pengmeng/tokens
2. 点击 "Generate New Token"
3. 选择 "Granular Access Token"
4. 配置权限：
   - **Type**: Automation（用于发布）
   - **Expiration**: 根据需要选择（或选择 "No expiration"）
   - **Packages**: 选择 `@pengmeng/*` 或所有包
   - **Permissions**: 
     - ✅ Read packages
     - ✅ Publish packages
     - ✅ Bypass 2FA（重要！必须勾选）

#### 步骤 2：复制 Token

创建成功后，**立即复制 token**（只显示一次！）

#### 步骤 3：配置 .npmrc

在项目根目录的 `.npmrc` 文件中添加：

```ini
//registry.npmjs.org/:_authToken=你的token
```

**注意**：不要将 token 提交到 Git！`.npmrc` 应该添加到 `.gitignore`，或者使用环境变量。

#### 步骤 4：使用环境变量（更安全）

```bash
# 设置环境变量
export NPM_TOKEN=你的token

# 在 .npmrc 中使用环境变量
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" >> .npmrc
```

或者在 `.npmrc` 中直接使用：

```ini
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
```

## 推荐方案

**建议使用方案一（启用 2FA）**，因为：
- ✅ 更安全
- ✅ 符合 npm 最佳实践
- ✅ 不需要管理 token
- ✅ 适合个人开发

**方案二（Token）适合**：
- CI/CD 自动化发布
- 不想启用 2FA 的情况

## 验证配置

### 如果使用 2FA：

```bash
# 重新登录
npm login --registry=https://registry.npmjs.org/

# 验证登录状态
npm whoami --registry=https://registry.npmjs.org/
```

### 如果使用 Token：

```bash
# 验证 token 是否有效
npm whoami --registry=https://registry.npmjs.org/

# 应该显示你的用户名
```

## 发布包

配置完成后，就可以正常发布了：

```bash
# 构建项目
pnpm run build

# 发布工具库
pnpm run publish:utils

# 发布组件库
pnpm run publish:components
```

## 常见问题

### Q: 启用 2FA 后，每次发布都要输入验证码吗？

A: 是的，但可以使用 Authenticator App 快速获取验证码。

### Q: Token 泄露了怎么办？

A: 立即到 https://www.npmjs.com/settings/pengmeng/tokens 删除该 token，然后创建新 token。

### Q: 可以在 .npmrc 中提交 token 吗？

A: **不建议**。应该：
- 将 `.npmrc` 添加到 `.gitignore`（如果包含 token）
- 或使用环境变量
- 或在 CI/CD 中通过密钥管理工具配置

### Q: 如何查看当前使用的认证方式？

A: 
```bash
npm whoami --registry=https://registry.npmjs.org/
```

## 相关链接

- npm 安全设置：https://www.npmjs.com/settings/pengmeng/security
- Token 管理：https://www.npmjs.com/settings/pengmeng/tokens
- npm 2FA 文档：https://docs.npmjs.com/configuring-two-factor-authentication

