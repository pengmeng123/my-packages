import * as path from "path";
import _ from "lodash";
import autoprefixer from "autoprefixer";
import esbuild from "rollup-plugin-esbuild";
import postcss from "rollup-plugin-postcss";

// 外部依赖判断：非相对路径和非绝对路径的都视为外部依赖
const external = (request) => {
  if (_.startsWith(request, ".") || path.isAbsolute(request)) {
    return false;
  }
  return true;
};

export default {
  input: "src/index.ts",
  output: [
    {
      file: "lib/index.js",
      format: "cjs",
      exports: "named",
    },
    {
      file: "es/index.js",
      format: "es",
    },
  ],
  plugins: [
    esbuild({
      target: "es2015",
      jsx: "transform",
      jsxFactory: "h",
      jsxFragment: "Fragment",
      minify: false,
      loaders: {
        ".ts": "ts",
        ".tsx": "tsx",
        ".js": "jsx",
        ".jsx": "jsx",
      },
    }),
    postcss({
      extensions: [".css", ".less"],
      autoModules: false,
      modules: {
        generateScopedName: (name, filename) => {
          // 只对 .module.less 文件启用 CSS Modules
          if (!/\.module\.(less|css|scss)$/.test(filename)) {
            return name;
          }
          const moduleName = _.kebabCase(
            _.first(path.basename(filename).split("."))
          );
          return `p_${moduleName}_${_.kebabCase(name)}`;
        },
      },
      plugins: [autoprefixer()],
      extract: "index.css",
    }),
  ],
  external,
};
