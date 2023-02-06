import { contextBridge, ipcRenderer } from 'electron';
contextBridge.exposeInMainWorld('electron', {
    startTests: (account: string, key: string, testIds: string) =>
        ipcRenderer.send('start-tests', {
            account,
            key,
            testIds,
        }),
    subscribeTests: (callback: (testId: string, result: boolean, error?: Error) => void) =>
      ipcRenderer.on('test-result', (event: any, arg:any) => callback(arg.testId, arg.result, arg.error))
});
