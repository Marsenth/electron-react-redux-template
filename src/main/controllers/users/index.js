const mongoose = require('mongoose');
const { ipcMain } = require('electron');
const writeLogs = require('../../helpers/logs');

const usersController = (mainWindow) => {
  ipcMain.handle('get-users', async function (_) {
    try {
      const db = mongoose.connection.db;
      const users = await db.collection('users').find({}).toArray();
      writeLogs(JSON.stringify(users), 'success')
      mainWindow.webContents.send(
        'get-users-success', users.map((u) => ({ ...u, _id: u._id.toString()}))
      );
    } catch (error) {
      mainWindow.webContents.send('get-users-error', error);
    }
  });
  
  ipcMain.handle('add-user', async function (_, params) {
    try {
      const db = mongoose.connection.db;
      const result = await db.collection('users').insertOne(params);
      result.insertedId = result.insertedId.toString();

      mainWindow.webContents.send('add-user-success', result);
    } catch (error) {
      mainWindow.webContents.send('add-user-error', error);
    }
  });
  
  ipcMain.handle('remove-user', async function (_, params) {
    try {
      const db = mongoose.connection.db;
      await db.collection('users').deleteOne({ _id: mongoose.Types.ObjectId(params._id) });

      mainWindow.webContents.send('remove-user-success', params._id);
    } catch (error) {
      mainWindow.webContents.send('remove-user-error', error);
    }
  });
};

module.exports = usersController;
