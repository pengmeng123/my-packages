/**
 * 格式化相关工具函数
 */

/**
 * 格式化数字（千分位）
 */
export function formatNumber(num: number | string, decimals = 2): string {
  const n = typeof num === 'string' ? parseFloat(num) : num;
  if (isNaN(n)) return '0';
  return n.toLocaleString('zh-CN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/**
 * 格式化金额（元）
 */
export function formatMoney(amount: number | string, decimals = 2): string {
  const n = typeof amount === 'string' ? parseFloat(amount) : amount;
  if (isNaN(n)) return '¥0.00';
  return `¥${formatNumber(n, decimals)}`;
}

/**
 * 格式化百分比
 */
export function formatPercent(num: number | string, decimals = 2): string {
  const n = typeof num === 'string' ? parseFloat(num) : num;
  if (isNaN(n)) return '0%';
  return `${(n * 100).toFixed(decimals)}%`;
}

/**
 * 格式化文件大小
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${units[i]}`;
}

/**
 * 截断字符串
 */
export function truncate(str: string, length: number, suffix = '...'): string {
  if (!str || str.length <= length) return str;
  return str.slice(0, length) + suffix;
}

/**
 * 手机号脱敏
 */
export function maskPhone(phone: string): string {
  if (!phone || phone.length !== 11) return phone;
  return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
}

/**
 * 身份证号脱敏
 */
export function maskIdCard(idCard: string): string {
  if (!idCard || idCard.length < 15) return idCard;
  return idCard.replace(/(\d{6})\d+(\d{4})/, '$1********$2');
}

