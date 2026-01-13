const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/vue',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    // 处理 TypeScript + JSX
    config.module.rules.push({
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
              '@vue/babel-preset-jsx',
            ],
          },
        },
      ],
    });

    // 支持 Less
    config.module.rules.push({
      test: /\.less$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: /\.module\.less$/,
              localIdentName: 'kzz_[name]_[local]',
            },
          },
        },
        'less-loader',
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
};
