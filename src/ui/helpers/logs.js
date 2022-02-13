const wirteLogs = (logsContent, type = 'ERROR', filename = 'ui') => {
  window.electronAPI.writeLogs({ logsContent, type, filename });
};

export default wirteLogs;
