
function getData() {
    const path = require('path');
    let {PythonShell} = require('python-shell');

    
    if(typeof document.getElementsByTagName('input')[0].files[0] === 'undefined'){
      console.log('Error file not defined');
    }
    else{
      filePath = document.getElementsByTagName('input')[0].files[0].path;
        var options = {
            scriptPath : path.join('volatility3'),
            args : ['-rjson','-f',filePath, 'windows.info'],
            //args : ['-h'],
            //mode: "json",
        };
        
        let pyshell = new PythonShell('vol.py', options);
        
        pyshell.on('message', function(message) {
          
            console.log(message);
            //mainWindow.webContents.send('pythonOutput',message)
            console.log(typeof message);
            //const updatedData = Data.updateVolitilityData(message).volitilityOutput   
        });
      
        pyshell.on('error', function (err) {
          console.log(' error ', err);
          //mainWindow.webContents.send('pythonError',err)
        })
      
        pyshell.end(function (code,signal) {
          console.log('The exit code was: ' + code);
          console.log('The exit signal was: ' + signal);
          console.log('finished');
          console.log(filePath);
          //mainWindow.webContents.send('PythonEnd',code)
        });
      }
      
    
}
