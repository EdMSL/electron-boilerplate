import { app, BrowserWindow, shell } from 'electron';
import path from 'path';
import fs from 'fs';

import { resolveHtmlPath } from '$utils/paths';

export const createWindow = () => {
  let mainWindow: BrowserWindow | null = new BrowserWindow({
    show: false,
    width: 1024,
    height: 1024,
    webPreferences: {
      devTools: process.env.NODE_ENV === 'development',
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../app/release/dist/preload.js'),
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

  return mainWindow;
};
