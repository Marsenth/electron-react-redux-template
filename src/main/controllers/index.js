
const logsController = require('./logs');
const connectServerController = require('./connectServer');
const usersController = require('./users');

const initControllers = async (mainWindow) => {
  logsController();
  connectServerController(mainWindow);
  usersController(mainWindow);
};

module.exports = initControllers;
