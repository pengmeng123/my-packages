# @kezhaozhao/ui-utils

UI 组件库公共工具函数，可独立使用，支持 Tree-shaking。

## 安装

```bash
pnpm add @kezhaozhao/ui-utils
```

## 按需引入

```typescript
// 只引入需要的函数，减少打包体积
import { formatMoney, isPhone } from '@kezhaozhao/ui-utils';

// 或者从具体模块引入
import { formatMoney } from '@kezhaozhao/ui-utils/es/format';
import { isPhone } from '@kezhaozhao/ui-utils/es/validate';
```

## API 文档

### DOM 工具 (`dom.ts`)

| 函数 | 说明 |
|------|------|
| `isBrowser` | 判断是否在浏览器环境 |
| `getScrollContainer(el)` | 获取滚动容器 |
| `getOffsetTop(el)` | 获取元素距离文档顶部的距离 |
| `isInViewport(el)` | 判断元素是否在视口内 |
| `copyToClipboard(text)` | 复制文本到剪贴板 |

### 格式化工具 (`format.ts`)

| 函数 | 说明 |
|------|------|
| `formatNumber(num, decimals)` | 格式化数字（千分位） |
| `formatMoney(amount, decimals)` | 格式化金额 |
| `formatPercent(num, decimals)` | 格式化百分比 |
| `formatFileSize(bytes)` | 格式化文件大小 |
| `truncate(str, length, suffix)` | 截断字符串 |
| `maskPhone(phone)` | 手机号脱敏 |
| `maskIdCard(idCard)` | 身份证号脱敏 |

### 校验工具 (`validate.ts`)

| 函数 | 说明 |
|------|------|
| `isPhone(value)` | 校验手机号 |
| `isEmail(value)` | 校验邮箱 |
| `isIdCard(value)` | 校验身份证号 |
| `isUrl(value)` | 校验 URL |
| `isEmpty(value)` | 校验是否为空 |
| `isCreditCode(value)` | 校验统一社会信用代码 |
| `isPositiveInteger(value)` | 校验正整数 |
| `isChinese(value)` | 校验中文字符 |

### 类名工具 (`classnames.ts`)

| 函数 | 说明 |
|------|------|
| `classnames(...args)` | 合并类名 |
| `createBEM(block)` | 创建 BEM 类名生成器 |

## 使用示例

```typescript
import { formatMoney, maskPhone, classnames, createBEM } from '@kezhaozhao/ui-utils';

// 格式化金额
formatMoney(1234567.89); // => '¥1,234,567.89'

// 手机号脱敏
maskPhone('13812345678'); // => '138****5678'

// 合并类名
classnames('foo', { bar: true, baz: false }); // => 'foo bar'

// BEM 类名
const bem = createBEM('button');
bem(); // => 'button'
bem('icon'); // => 'button__icon'
bem({ active: true }); // => 'button button--active'
```

