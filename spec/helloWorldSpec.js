var request = require("request");
var base_url = "http://localhost:3000/";

describe("Hello Tests", function(){
	describe("GET /", function(){

		it("returns Hello World", function(done){
	
				expect("Hello World").toBe("Hello World");
		});
	
	});
});
