import path from 'path';

const src = path.resolve(__dirname, '../src');
const app = path.resolve(__dirname, '../app');

export const PATHS = {
  src,
  build: path.join(app, '../release/build'),
  dist: path.join(app, '../release/app/dist'),
  conf: path.join(__dirname, '.'),
  renderer: path.join(src, 'renderer'),
  main: path.join(src, 'main'),
};
