/**
 * 类名合并工具（轻量版 classnames）
 */

type ClassValue = string | number | boolean | undefined | null | ClassObject | ClassArray;
type ClassObject = { [key: string]: boolean | undefined | null };
type ClassArray = ClassValue[];

/**
 * 合并类名
 * @example
 * classnames('foo', 'bar') // => 'foo bar'
 * classnames('foo', { bar: true, baz: false }) // => 'foo bar'
 * classnames(['foo', 'bar']) // => 'foo bar'
 */
export function classnames(...args: ClassValue[]): string {
  const classes: string[] = [];

  for (const arg of args) {
    if (!arg) continue;

    if (typeof arg === 'string' || typeof arg === 'number') {
      classes.push(String(arg));
    } else if (Array.isArray(arg)) {
      const inner = classnames(...arg);
      if (inner) classes.push(inner);
    } else if (typeof arg === 'object') {
      for (const key of Object.keys(arg)) {
        if (arg[key]) classes.push(key);
      }
    }
  }

  return classes.join(' ');
}

/**
 * 创建 BEM 类名生成器
 * @example
 * const bem = createBEM('button');
 * bem() // => 'button'
 * bem('icon') // => 'button__icon'
 * bem({ active: true }) // => 'button button--active'
 * bem('icon', { large: true }) // => 'button__icon button__icon--large'
 */
export function createBEM(block: string) {
  return function (
    elementOrModifiers?: string | ClassObject,
    modifiers?: ClassObject
  ): string {
    let base = block;
    let mods = modifiers;

    if (typeof elementOrModifiers === 'string') {
      base = `${block}__${elementOrModifiers}`;
    } else if (elementOrModifiers) {
      mods = elementOrModifiers;
    }

    const classes = [base];
    if (mods) {
      for (const key of Object.keys(mods)) {
        if (mods[key]) {
          classes.push(`${base}--${key}`);
        }
      }
    }

    return classes.join(' ');
  };
}
