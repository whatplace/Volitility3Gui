
const template = [
    {
       label: 'File',
       submenu: [
        
        
          {
             // Updates volatility 3 from github
             label: 'Update Volatility',
             id: 'updateVolatility',
             click(){
              const download = require("download-git-repo");
              download('volatilityfoundation/volatility3', './src/volatility3', function (err) {
              console.log(err ? 'Error' : 'Success') });
             }
          },
          {
           type: 'separator'
           },
          {
           // Installs any python dependencies w/ pip
           label: 'Resolve Dependencies',
           id: 'pipPython',
           click(){
            let { PythonShell } = require("python-shell");
            const path = require("path");
            // Prod
            const scriptPath = path.join("resources","app","src", "pythonDepend.py")
            // Dev
            //const scriptPath = path.join("src", "pythonDepend.py")

            PythonShell.run(scriptPath, null , function (err) {
                if (err) throw err;
                console.log('finished');
              });
           }
        }
       ]
    },
    
    {
       label: 'View',
       submenu: [
          {
             role: 'reload'
          },
          {
             role: 'toggledevtools'
          },
          {
             type: 'separator'
          },
          {
             role: 'resetzoom'
          },
          {
             role: 'zoomin'
          },
          {
             role: 'zoomout'
          },
          {
             type: 'separator'
          },
          {
             role: 'togglefullscreen'
          }
       ]
    },
    
    {
       role: 'window',
       submenu: [
          {
             role: 'minimize'
          },
          {
             role: 'close'
          }
       ]
    }
  ]

module.exports = template; 

