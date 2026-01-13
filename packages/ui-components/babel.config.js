module.exports = {
  presets: [
    '@babel/preset-typescript',
    '@vue/babel-preset-jsx',
    [
      '@babel/preset-env',
      {
        useBuiltIns: false,
        modules: false,
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-transform-runtime', { regenerator: false }],
    'lodash',
  ],
};

