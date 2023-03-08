/* eslint import/no-import-module-exports: off */
import webpack from 'webpack';
import path from 'path';
import { merge } from 'webpack-merge';
import js from './webpack/rules/js-ts';
import images from './webpack/rules/images';
import { PATHS } from './webpack.paths';
import fonts from './webpack/rules/fonts';

const plugins = [];

const configuration: webpack.Configuration = {
  resolve: {
    alias: {
      $assets: path.resolve(__dirname, `${PATHS.src}/assets/`),
      $constants: path.resolve(__dirname, `${PATHS.src}/constants/`),
      $containers: path.resolve(__dirname, `${PATHS.src}/renderer/containers/`),
      $components: path.resolve(__dirname, `${PATHS.src}/renderer/components/`),
      $main: path.resolve(__dirname, `${PATHS.src}/main/`),
      $store: path.resolve(__dirname, `${PATHS.src}/store/`),
      $types: path.resolve(__dirname, `${PATHS.src}/types/`),
      $utils: path.resolve(__dirname, `${PATHS.src}/utils/`),
    },
    fallback: {
      assert: false,
      fs: false,
      path: false,
    },
    extensions: ['.ts', '.tsx', '.js'],
    descriptionFiles: ['package.json'],
  },
  module: {
    strictExportPresence: true,
  },
  stats: {
    all: false,
    modules: true,
    errors: true,
    warnings: false,
    moduleTrace: true,
    errorDetails: false,
  },
  plugins,
};

export default merge(
  configuration,
  js(),
  images(),
  fonts(),
);
