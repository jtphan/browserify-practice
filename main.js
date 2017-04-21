var beep = require("./beep.js");

console.log("Entering main js file");


var response = document.getElementById("form1");

response.addEventListener("submit", 
	function() 
	{
		console.log("Submit confirmed!");
		alert("BLAH BLAH BLAH");
	}); 