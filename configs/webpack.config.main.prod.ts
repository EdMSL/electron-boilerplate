/**
 * Webpack config for production electron main process
 */

import path from 'path';
import webpack from 'webpack';
import { merge } from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';
import baseConfig from './webpack.config.base';
import { PATHS } from './webpack.paths';
import css from './webpack/rules/css';

const configuration: webpack.Configuration = {
  devtool: 'source-map',

  mode: 'production',

  target: 'electron-main',

  entry: {
    main: path.join(PATHS.main, 'main.ts'),
    preload: path.join(PATHS.main, 'preload.ts'),
  },

  output: {
    path: PATHS.dist,
    filename: '[name].js',
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.type': '"browser"',
    }),
  ],

  /**
   * Disables webpack processing of __dirname and __filename.
   * If you run the bundle in node.js it falls back to these values of node.js.
   * https://github.com/webpack/webpack/issues/2010
   */
  node: {
    __dirname: false,
    __filename: false,
  },
};

export default merge(
  baseConfig,
  configuration,
  css(path.join(PATHS.renderer, 'styles', 'resources')),
);
