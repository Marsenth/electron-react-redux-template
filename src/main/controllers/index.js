const logsController = require('./logs');
const usersController = require('./users');

const initControllers = (mainWindow) => {
  logsController();
  usersController(mainWindow);
};

module.exports = initControllers;
