var PythonShell = require('python-shell');

exports.getSensorData = function(pythonAppName, promise){
    var output="bob2"
    var options = {mode: 'json'};
    PythonShell.run(pythonAppName, options, function (err, results) {
        if (err) throw err;

        console.log(results);
        promise(results[0]);
       
    });
    //return output;
}