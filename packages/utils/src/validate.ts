/**
 * 校验相关工具函数
 */

/**
 * 校验手机号
 */
export function isPhone(value: string): boolean {
  return /^1[3-9]\d{9}$/.test(value);
}

/**
 * 校验邮箱
 */
export function isEmail(value: string): boolean {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
}

/**
 * 校验身份证号
 */
export function isIdCard(value: string): boolean {
  return /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dXx]$/.test(
    value
  );
}

/**
 * 校验 URL
 */
export function isUrl(value: string): boolean {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

/**
 * 校验是否为空
 */
export function isEmpty(value: unknown): boolean {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string') return value.trim() === '';
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
}

/**
 * 校验统一社会信用代码
 */
export function isCreditCode(value: string): boolean {
  return /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/.test(value);
}

/**
 * 校验正整数
 */
export function isPositiveInteger(value: string | number): boolean {
  const num = typeof value === 'string' ? parseInt(value, 10) : value;
  return Number.isInteger(num) && num > 0;
}

/**
 * 校验中文字符
 */
export function isChinese(value: string): boolean {
  return /^[\u4e00-\u9fa5]+$/.test(value);
}
