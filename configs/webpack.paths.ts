import path from 'path';

const src = path.resolve(__dirname, '../src');
const release = path.resolve(__dirname, '../app/release');

export const PATHS = {
  src,
  build: path.join(release, 'build'),
  dist: path.join(release, 'dist'),
  conf: path.join(__dirname, '.'),
  renderer: path.join(src, 'renderer'),
  main: path.join(src, 'main'),
};
