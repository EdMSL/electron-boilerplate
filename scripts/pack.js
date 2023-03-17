/* eslint no-console: off */
const packager = require('electron-packager');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const pjson = require('../app/release/package.json');

async function bundleElectronApp(asar, isAll) {
  return packager({
    dir: './app/release',
    platform: 'win32',
    arch: isAll ? ['x64', 'ia32'] : ['ia32'],
    ignore: 'build',
    out: './app/release/build',
    executableName: 'app',
    asar: asar === 'asar',
    afterComplete: [(buildPath, _, __, arch) => {
      fs.renameSync(
        path.resolve(buildPath),
        path.resolve(
          path.dirname(buildPath),
          asar !== 'asar'
            ? `${pjson.productName} Test ${pjson.version} ${new Date().toLocaleString().replace(/(,\s|:)/g, '_')} ${arch.replace('ia', 'x')}`
            : `${pjson.productName} ${pjson.version}`,
        ),
      );
    }],
  });
}

bundleElectronApp(process.argv[2], process.argv[3])
  .catch((error) => console.log(`${chalk.redBright('Release error:\n')}${error.message}`));
