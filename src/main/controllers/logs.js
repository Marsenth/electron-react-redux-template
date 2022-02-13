const { ipcMain } = require('electron');
const writeLogs = require('../helpers/logs');

const logsController = () => {
  ipcMain.handle('write-logs', function (_, params = {}) {
    const { logsContent, type = 'ERROR', filename = 'ui' } = params;
    
    writeLogs(logsContent, type, filename)
  });
};

module.exports = logsController;
