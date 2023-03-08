import HtmlWebpackPlugin from 'html-webpack-plugin';

export default (assetsDir: string, scriptSrc?: string, name = 'index') => new HtmlWebpackPlugin({
  filename: `${name}.html`,
  template: `${assetsDir}/${name}.html`,
  inject: !scriptSrc,
  minify: false,
  scriptSrc,
  isDev: process.env.NODE_ENV === 'development',
});
