/* eslint no-console: off */
const packager = require('electron-packager');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const pjson = require('../app/release/package.json');

const appName = 'App';

async function bundleElectronApp(asar, isAll) {
  return packager({
    dir: './app/release',
    platform: 'win32',
    arch: isAll ? ['x64', 'ia32'] : ['ia32'],
    ignore: 'build',
    out: './app/release/build',
    asar: asar === 'asar',
    win32metadata: {
      ProductName: appName,
    },
    afterComplete: [(buildPath, _, __, arch) => {
      fs.renameSync(
        path.resolve(buildPath),
        path.resolve(
          path.dirname(buildPath),
          asar !== 'asar'
            ? `${appName} Test ${pjson.version} ${new Date().toLocaleString().replace(/(,\s|:)/g, '_')} ${arch.replace('ia', 'x')}`
            : `${appName} ${pjson.version}`,
        ),
      );
    }],
  });
}

bundleElectronApp(process.argv[2], process.argv[3])
  .catch((error) => console.log(`${chalk.redBright('Release error:\n')}${error.message}`));
