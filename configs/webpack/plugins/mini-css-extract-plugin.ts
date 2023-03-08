import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default () => new MiniCssExtractPlugin({
  filename: 'css/[name].css',
  chunkFilename: 'css/[id].css',
});
