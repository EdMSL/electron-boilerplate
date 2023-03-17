import webpack from 'webpack';

export default (): webpack.Configuration => ({
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|svg)$/,
        type: 'asset',
        generator: {
          filename: 'images/[name][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024,
          },
        },
      },
    ],
  },
});
