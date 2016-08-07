var Device = require('losant-mqtt').Device;
var getSensorData = require("../app/sensor").getSensorData;
// Construct a device instance.
var device = new Device({
  id: '579d587b6befde0100524824',
  key: '2a4861a5-b4a1-4c44-8aae-626afbb27b71',
  secret: 'ffe2f3c78afb92e7363bf7d42190154956288b7137b73af592f04f7b983330b7'
});

console.info("Connecting device...");
// Connect device to Losant.
device.connect(function(){});
console.info("Waiting to connect ...");

// Attach event listener for commmands.

device.on("connect", function(){
        console.info("Device is connected");
        if(device.isConnected()){
                device.on('command', function(command){
                        console.log(command.name);
                        console.log(command.payload);
                });
                setInterval(function(){
                        var msg = {temp: 100};
                        getSensorData("sense-hat.py", function(data){
                            console.info("sending temp data:"+JSON.stringify(msg));
                            device.sendState(data,  function(d){console.info(d);});    
                        });
                        
                },1000);
        }

});