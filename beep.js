module.exports = {

	hello: function()
	{
		console.log('Hello');
	},

	shout: function(str)
	{
		return str.toUpperCase() + '!';
	},

	test: function()
	{
		var output = document.getElementById('textEntry');
		output.innerHTML = "Hello World!";

		var url = document.getElementById("answer");
		console.log("Something is gonna happen here:",url.value);
	},

	testicles: function()
	{
		console.log('Making conversion!');
		document.getElementById("form1").addEventListener('submit',function() {
		alert("Attempting parse now!");
		var string = document.getElementById("textEntry").value;
		document.getElementById("articleTitle").value = string;
		console.log(string);
		console.log('Ending');
		return false; 
	}); 

	return true; 
	}
}
