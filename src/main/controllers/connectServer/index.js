const { ipcMain } = require('electron');
const initMongoose = require('../../mongoose/init');

const connectServerController = (mainWindow) => {
  ipcMain.handle('connect-server', async function (_) {
    try {
      await initMongoose();
      mainWindow.webContents.send('connect-server-success', true);
    } catch (error) {
      console.log(error)
      mainWindow.webContents.send('connect-server-error', error);
    }
  });
};

module.exports = connectServerController;
