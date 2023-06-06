module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
          '@styles': './src/styles',
          '@configs': './src/configs',
          '@helpers': './src/helpers',
          '@scenes': './src/scenes',
          '@containers': './src/containers',
          '@components': './src/components',
          '@constants': './src/constants',
          '@img': './src/img',
          '@redux': './src/redux',
        },
      },
    ],
  ],
};
