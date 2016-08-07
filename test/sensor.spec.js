var expect    = require("chai").expect;
var getSensorData = require("../app/sensor").getSensorData;
describe("JS invocation for Sensor Data", function(){
    var result = undefined;
    before(function(done){
            getSensorData("app/sensor.py", function(r){
                result = r;
                done();
            });
    });
    it("returned data should contain a temp variable", function(){
        expect(result).to.have.property('temp');        
    });

    it("getSensorData should return a json object", function(){
       expect(result.temp).to.equal(34);                        
    });
});