const child_process = require('child_process');
const fs = require('fs');

const wirteLogs = async (logsContent, type = 'ERROR', filename = 'main') => {

  const logsLabel = `[${type.toLocaleUpperCase()}]`;

  try {
    const thereIsLogs = !!child_process.execSync('ls').toString().split('\n').find(
      (f) => f === 'logs'
    );

    if (!thereIsLogs) child_process.execSync('mkdir logs')

    fs.appendFileSync(`logs/${filename}.txt`, `${logsLabel}: ${logsContent}\n`);
  } catch (error) {
    fs.appendFileSync(`logs/${filename}.txt`, `${logsLabel}: ${error}\n`);
  }
};

module.exports = wirteLogs;
