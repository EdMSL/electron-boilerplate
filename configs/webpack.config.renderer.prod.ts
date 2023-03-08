import path from 'path';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { merge } from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';
import baseConfig from './webpack.config.base';
import { PATHS } from './webpack.paths';
import css from './webpack/rules/css';
import generateHtmlPlugin from './webpack/plugins/html-webpack-plugin';
import svgspritemapPlugin from './webpack/plugins/svgspritemap-plugin';

const configuration: webpack.Configuration = {
  devtool: 'source-map',

  mode: 'production',

  target: ['web', 'electron-renderer'],

  entry: [path.join(PATHS.renderer, 'index.tsx')],

  output: {
    path: PATHS.dist,
    publicPath: './',
    filename: 'renderer.js',
    library: {
      type: 'umd',
    },
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
    ],
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      DEBUG_PROD: false,
    }),

    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),

    new webpack.DefinePlugin({
      'process.type': '"renderer"',
    }),

    generateHtmlPlugin(
      PATHS.renderer,
    ),
    svgspritemapPlugin(path.join(PATHS.src, '/assets/images/sprite')),
  ],
};

export default merge(
  baseConfig,
  configuration,
  css(path.join(PATHS.renderer, 'styles', 'resources')),
);
