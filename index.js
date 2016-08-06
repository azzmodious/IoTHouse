/**
* This is the node module that gets the senor data via python and sends the data over mqtt
* and into losant.
*/

var Device = require('losant-mqtt').Device;
var PythonShell = require('python-shell');



function getSensorData(){
    var options = {
  mode: 'json'
};
PythonShell.run('temp.py', options, function(err, results){
        console.log("Results: "+JSON.stringify(results[0]));
        if(err) throw err;
       
});
}