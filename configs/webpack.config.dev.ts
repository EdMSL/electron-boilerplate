/* eslint import/no-import-module-exports: off, no-console: off */
import 'webpack-dev-server';
import path from 'path';
import chalk from 'chalk';
import { spawn } from 'child_process';
import webpack from 'webpack';
import { merge } from 'webpack-merge';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import css from './webpack/rules/css';
import baseConfig from './webpack.config.base';
import { PATHS } from './webpack.paths';
import generateHtmlPlugin from './webpack/plugins/html-webpack-plugin';
import svgspritemapPlugin from './webpack/plugins/svgspritemap-plugin';

const port = process.env.PORT || 8081;
const devServerUrl = `http://localhost:${port}`;

const configuration: webpack.Configuration = {
  mode: 'development',
  entry: [
    `webpack-dev-server/client?${devServerUrl}/dist`,
    'webpack/hot/only-dev-server',
    path.join(PATHS.renderer, 'index.tsx'),
  ],
  output: {
    path: PATHS.dist,
    publicPath: '/',
    filename: 'index.js',
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  devtool: 'cheap-module-source-map',
  target: ['web', 'electron-renderer'],
  devServer: {
    static: {
      publicPath: '/',
    },
    port,
    host: '0.0.0.0',
    historyApiFallback: {
      verbose: true,
    },
    hot: true,
    setupMiddlewares(middlewares) {
      console.log(chalk.blue.bold('Starting preload.js builder...'));
      const preloadProcess = spawn('npm', ['run', 'start:preload'], {
        shell: true,
        stdio: 'inherit',
      })
        .on('close', (code: number) => process.exit(code!))
        .on('error', (spawnError) => console.error(spawnError));

      console.log(chalk.blue.bold('Starting Main Process...'));
      let args = ['run', 'start:main'];
      if (process.env.MAIN_ARGS) {
        args = args.concat(
          ['--', ...process.env.MAIN_ARGS.matchAll(/"[^"]+"|[^\s"]+/g)].flat(),
        );
      }
      spawn('npm', args, {
        shell: true,
        stdio: 'inherit',
      })
        .on('close', (code: number) => {
          preloadProcess.kill();
          process.exit(code!);
        })
        .on('error', (spawnError) => console.error(spawnError));
      return middlewares;
    },
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
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
