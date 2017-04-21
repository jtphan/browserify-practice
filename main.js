var beep = require("./beep.js");

console.log("Entering main js file");

var response = document.getElementById("form1");

response.addEventListener("submit", 
	function() 
	{
		var str = document.getElementById("textEntry");
		//console.log(str.value);
		console.log("Submit confirmed!");
		var loud = beep.shout(str.value); 
		console.log(loud);
		alert(loud);
	}); 