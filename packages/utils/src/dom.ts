/**
 * DOM 相关工具函数
 */

/**
 * 判断是否在浏览器环境
 */
export const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * 获取滚动容器
 */
export function getScrollContainer(el: HTMLElement): HTMLElement | Window {
  let node = el;
  while (node && node !== document.body) {
    const { overflowY } = window.getComputedStyle(node);
    if (overflowY === 'scroll' || overflowY === 'auto') {
      return node;
    }
    node = node.parentNode as HTMLElement;
  }
  return window;
}

/**
 * 获取元素距离文档顶部的距离
 */
export function getOffsetTop(el: HTMLElement): number {
  let offset = 0;
  let parent = el;
  while (parent) {
    offset += parent.offsetTop;
    parent = parent.offsetParent as HTMLElement;
  }
  return offset;
}

/**
 * 判断元素是否在视口内
 */
export function isInViewport(el: HTMLElement): boolean {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * 复制文本到剪贴板
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  }
  // 降级方案
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  const success = document.execCommand('copy');
  document.body.removeChild(textarea);
  return success;
}

