/* eslint global-require: off, no-console: off */
import {
  app, BrowserWindow, globalShortcut, ipcMain,
} from 'electron';
import path from 'path';
import fs from 'fs';
import { createWindow } from './createWindow';

let mainWindow: BrowserWindow | null = null;

const start = async () => {
  mainWindow = createWindow();

  globalShortcut.register('Alt+Q', () => {
    app.exit();
  });

  globalShortcut.register('F10', () => {
    if (mainWindow && mainWindow.isFocused()) {
      if (mainWindow.webContents.isDevToolsOpened()) {
        mainWindow.webContents.closeDevTools();
      } else {
        mainWindow.webContents.openDevTools();
      }
    }
  });

  app.on('activate', () => {
    if (mainWindow === null) createWindow();
  });
};

ipcMain.handle('readFile', async (_, arg) => {
  const res = fs.readFileSync(path.resolve(arg[0]), 'utf-8');
  return res;
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(() => {
    start();
  })
  .catch(console.log);
