const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  writeLogs: (params) => ipcRenderer.invoke('write-logs', params),

  getUsers: (params) => ipcRenderer.invoke('get-users', params),
  getUsersSuccess: (callback) => ipcRenderer.on('get-users-success', callback),
  getUsersError: (callback) => ipcRenderer.on('get-users-error', callback),

  addUser: (params) => ipcRenderer.invoke('add-user', params),
  addUserSuccess: (callback) => ipcRenderer.on('add-user-success', callback),
  addUserError: (callback) => ipcRenderer.on('add-user-error', callback),

  removeUser: (params) => ipcRenderer.invoke('remove-user', params),
  removeUserSuccess: (callback) => ipcRenderer.on('remove-user-success', callback),
  removeUserError: (callback) => ipcRenderer.on('remove-user-error', callback)
})