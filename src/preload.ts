import { contextBridge, ipcRenderer } from "electron";
contextBridge.exposeInMainWorld(
  'electron',
  {
    doThing: () => ipcRenderer.send('create', {
      test: 'test'
    })
  }
)