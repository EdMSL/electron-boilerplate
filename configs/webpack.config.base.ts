/* eslint import/no-import-module-exports: off */
import webpack from 'webpack';
import { merge } from 'webpack-merge';
import TsconfigPathsPlugins from 'tsconfig-paths-webpack-plugin';
import js from './webpack/rules/js-ts';
import images from './webpack/rules/images';
import fonts from './webpack/rules/fonts';

const configuration: webpack.Configuration = {
  resolve: {
    plugins: [new TsconfigPathsPlugins()],
    extensions: ['.ts', '.tsx', '.js'],
    descriptionFiles: ['package.json'],
  },
  stats: 'errors-only',
};

export default merge(
  configuration,
  js(),
  images(),
  fonts(),
);
