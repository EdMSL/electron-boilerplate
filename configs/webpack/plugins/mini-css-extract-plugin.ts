import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default () => new MiniCssExtractPlugin({
  filename: '[name].css',
});
