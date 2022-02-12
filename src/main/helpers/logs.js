const child_process = require('child_process');
const fs = require('fs');

const wirteLogs = async (logsContent, type = 'ERROR') => {
  const logsLabel = `[${type.toLocaleUpperCase()}]`;

  try {
    const thereIsLogs = !!child_process.execSync('ls').toString().split('\n').find(
      (f) => f === 'logs'
    );

    if (!thereIsLogs) child_process.execSync('mkdir logs')

    fs.writeFileSync('logs/main.txt', `${logsLabel}: ${logsContent}`);
  } catch (error) {
    fs.writeFileSync('logs/main.txt', `${logsLabel}: ${error}`);
  }
};

module.exports = wirteLogs;
