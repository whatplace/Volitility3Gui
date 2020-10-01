

const $ = require('jquery');
const { stdout } = require('process');
const dt = require('datatables.net')();
const dtbs = require('datatables.net-bs4')(window, $);


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
            args : ['-qrjson','-f',filePath, 'windows.info'],

        };
        
        let pyshell = new PythonShell('vol.py', options);
        outputt = {};
        pyshell.on('message', function(message) {
            
            //console.log(JSON.parse(message))
            
            //console.log(JSON.parse(message));
           // let data = JSON.parse(message);
            console.log(message);
           //NEED TO PULL SECTION OUT INTO ITS OWN FUNCTION TO BE CALLED ONCE ALL OUTPUT IS COLLECTED AND STORED 
           /*
            message => {
              console.log(message)
              let data = message
              //let data = JSON.parse(message)
              console.log(data)
      
              // generate DataTables columns dynamically
              let columns = [];
              Object.keys(data[0]).forEach( key => columns.push({ title: key, data: key }) )
      
              // Create DataTable
              $('#output').DataTable({
                  data: data,
                  columns: columns
              });
              
            }
            */
            //mainWindow.webContents.send('pythonOutput',message)     J

            //const updatedData = Data.updateVolitilityData(message).volitilityOutput   
        });
      
        pyshell.on('error', function (err) {
          //console.log(' error ', err);
          //mainWindow.webContents.send('pythonError',err)
        });
      
        pyshell.end(function (code,signal) {
          //console.log('The exit code was: ' + code);
          //console.log('The exit signal was: ' + signal);
          //console.log('finished');
          //console.log(filePath);
          //mainWindow.webContents.send('PythonEnd',code)
        });
        //let data = JSON.parse(output);
        
      }
      
    
}



$(document).ready( () => console.log("Page is loaded!") )


