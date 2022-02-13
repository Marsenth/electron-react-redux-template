const { app } = require('electron');
const path = require('path');
const child_process = require('child_process');
const fs = require('fs');

const wirteLogs = async (logsContent, type = 'ERROR', filename = 'main') => {
  const logsPathTo = path.join(app.getAppPath('userData'), `logs`);
  const logsPathname = path.join(logsPathTo, `${filename}.txt`);
  const logsLabel = `[${type.toLocaleUpperCase()}]`;

  try {
    child_process.execSync(`ls ${logsPathTo}`).toString().split('\n').find(
      (f) => f === 'logs'
    );
  } catch (_) {
    child_process.execSync(`mkdir ${logsPathTo}`)
  }

  fs.appendFileSync(logsPathname, `${logsLabel}: ${logsContent}\n`);
};

module.exports = wirteLogs;
