//Deprecated
import {PythonShell} from 'python-shell';
 
PythonShell.run('volatility3\vol.py', null, function (err) {
  if (err) throw err;
  console.log('finished');
});