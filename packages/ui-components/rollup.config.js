/**
 * Rollup 打包配置文件
 *
 * Rollup 的作用：
 * 1. 将多个模块打包成单个或多个文件
 * 2. 支持 Tree-shaking（移除未使用的代码）
 * 3. 生成 CommonJS 和 ESM 两种格式
 * 4. 处理 TypeScript、JSX、Less 等文件
 * 5. 提取和打包 CSS 文件
 */

import * as path from "path";
import _ from "lodash";
import autoprefixer from "autoprefixer";
import esbuild from "rollup-plugin-esbuild";
import postcss from "rollup-plugin-postcss";

/**
 * 外部依赖判断函数
 *
 * 作用：决定哪些模块应该作为外部依赖（不打包进 bundle）
 * - 相对路径（./xxx）和绝对路径（/xxx）→ 内部模块，需要打包
 * - 其他路径（如 'vue', 'lodash'）→ 外部依赖，不打包，由使用者提供
 *
 * 好处：
 * - 减小打包体积
 * - 避免重复打包依赖
 * - 让使用者可以控制依赖版本
 */
const external = (request) => {
  if (_.startsWith(request, ".") || path.isAbsolute(request)) {
    return false; // 内部模块，需要打包
  }
  return true; // 外部依赖，不打包
};

export default {
  // 入口文件：从 src/index.ts 开始打包
  input: "src/index.ts",

  // 输出配置：生成两种格式的文件
  output: [
    {
      file: "lib/index.js", // CommonJS 格式输出
      format: "cjs", // 使用 require/module.exports
      exports: "named", // 命名导出
    },
    {
      file: "es/index.js", // ESM 格式输出
      format: "es", // 使用 import/export
    },
  ],

  // 插件配置
  plugins: [
    /**
     * esbuild 插件
     *
     * 作用：
     * - 将 TypeScript 编译为 JavaScript
     * - 将 JSX 转换为 JavaScript（Vue 的 h 函数调用）
     * - 处理 .ts, .tsx, .js, .jsx 文件
     *
     * 为什么用 esbuild 而不是 Babel？
     * - 速度更快（Go 语言编写）
     * - 内置 TypeScript 支持
     * - 避免 Babel 版本冲突问题
     */
    esbuild({
      target: "es2015", // 编译目标：ES2015 语法
      jsx: "transform", // 转换 JSX 语法（而不是保留）
      jsxFactory: "h", // Vue 的 JSX 工厂函数
      jsxFragment: "Fragment", // JSX Fragment 支持
      minify: false, // 不压缩（发布时再压缩）
      loaders: {
        ".ts": "ts", // TypeScript 文件
        ".tsx": "tsx", // TypeScript + JSX 文件
        ".js": "jsx", // JavaScript 文件（可能包含 JSX）
        ".jsx": "jsx", // JSX 文件
      },
    }),

    /**
     * PostCSS 插件
     *
     * 作用：
     * - 处理 Less/CSS 文件
     * - 支持 CSS Modules（.module.less 文件）
     * - 自动添加浏览器前缀（autoprefixer）
     * - 提取 CSS 到独立文件
     */
    postcss({
      extensions: [".css", ".less"], // 处理的文件扩展名
      autoModules: false, // 不自动启用 CSS Modules
      modules: {
        // CSS Modules 类名生成规则
        generateScopedName: (name, filename) => {
          // 只对 .module.less 文件启用 CSS Modules
          if (!/\.module\.(less|css|scss)$/.test(filename)) {
            return name; // 普通 CSS 文件，保持原类名
          }
          // CSS Modules：生成唯一类名，避免样式冲突
          // 格式：p_组件名_类名
          // 例如：p_button_primary
          const moduleName = _.kebabCase(
            _.first(path.basename(filename).split("."))
          );
          return `p_${moduleName}_${_.kebabCase(name)}`;
        },
      },
      plugins: [autoprefixer()], // 自动添加浏览器前缀
      extract: "index.css", // 提取 CSS 到 index.css 文件
    }),
  ],

  // 外部依赖配置：哪些模块不打包
  external,
};
