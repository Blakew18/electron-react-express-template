let server = require('./src/server/server');

const { app, BrowserWindow, ipcMain  } = require('electron');
const path = require('path');
const url = require('url');
const { autoUpdater } = require('electron-updater');

let mainWindow;

function createWindow() {

  const startUrl = 
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, 'build', 'index.html'),
      protocol: 'file:',
      slashes: true,
    });
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadURL(startUrl);
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
  mainWindow.once('ready-to-show', () => {
    autoUpdater.checkForUpdatesAndNotify();
  });
}
app.on('ready', createWindow);
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
ipcMain.on('app_version', (event) => {
  event.sender.send('app_version', { version: app.getVersion() });
});
ipcMain.on('restart_app', () => {
  autoUpdater.quitAndInstall();
});
autoUpdater.on('update-available', () => {
  mainWindow.webContents.send('update_available');
});
autoUpdater.on('update-downloaded', () => {
  mainWindow.webContents.send('update_downloaded');
});
server.startExpress();