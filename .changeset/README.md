# Changesets

本项目使用 [Changesets](https://github.com/changesets/changesets) 管理版本和发布。

## 使用方法

### 1. 添加变更记录

当你完成一个功能或修复后，运行：

```bash
pnpm changeset
```

按提示选择：
- 选择要发布的包
- 选择版本类型（patch/minor/major）
- 填写变更描述

### 2. 发布

```bash
pnpm release
```

这个命令会：
1. 构建所有包
2. 根据 changeset 更新版本号
3. 发布到 npm

### 3. 提交和推送

```bash
git add .
git commit -m "chore: release"
git push origin main
```


