/* eslint global-require: off, no-console: off */
import path from 'path';
import fs from 'fs';
import {
  app, BrowserWindow, globalShortcut, ipcMain, shell,
} from 'electron';
import { resolveHtmlPath } from '../utils/paths';

let mainWindow: BrowserWindow | null = null;

/* ipcMain.on('readFile', async (event, arg) => {
  const res = fs.readFileSync(path.resolve(arg[0]), 'utf-8');
  // const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  // console.log(msgTemplate(arg));
  event.reply('readFile', res);
}); */
ipcMain.handle('readFile', async (event, arg) => {
  const res = fs.readFileSync(path.resolve(arg[0]), 'utf-8');
  return res;
});

const createWindow = async () => {
  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 1024,
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../release/app/dist/preload.js'),
    },
  });

  mainWindow.loadURL(resolveHtmlPath('index.html'));

  const pathToExtension = path.resolve('E:\\Projects\\oa-launcher\\extensions\\reduxDevTools');

  if (process.env.NODE_ENV === 'development' && fs.existsSync(pathToExtension)) {
    mainWindow.webContents.session.loadExtension(pathToExtension);
  }

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }

    mainWindow.show();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });
};

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(() => {
    createWindow();
    app.on('activate', () => {
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);
