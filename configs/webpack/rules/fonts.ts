import webpack from 'webpack';

export default (): webpack.Configuration => ({
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },
});
