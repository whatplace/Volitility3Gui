const { app, BrowserWindow, ipcRenderer } = require('electron');
const path = require('path');



// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: '#9E9E9E',
    webPreferences:{
      nodeIntegration: true,
      worldSafeExecuteJavaScript: true
    }
    
  });




  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  //mainWindow.webContents.openDevTools();




};

/*
//WIP need to either figure out framework or retrieve list of plugins off of error
function getPlugins() {
  const path = require('path');
  let {PythonShell} = require('python-shell');
  var options = {
    scriptPath : path.join('volatility3'),
    args : ['plugins'],

};

  let pyInit = new PythonShell('vol.py', options);
  pyInit.on('error', function (err) {
    console.log('error', err);
    //teststring = 'argument plugin: invalid choice plugins (choose from banners.Banners, configwriter.ConfigWriter)'
    
    //test = teststring.match(/argument plugin: invalid choice plugins * \(*\)/g)
    //console.log(test)
  });
}
*/

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

