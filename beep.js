module.export = function shout(str)
{
	return str.toUpperCase() + '!';
};


module.export = function urlTest()
{
  var output = document.getElementById('textEntry');
  output.innerHTML = "Hello World!";
  //
  var url = document.getElementById("answer");
  console.log("Something is gonna happen here:",url.value);
}


var test = function()
{
  var url = document.getElementById("answer");
  console.log("This is the url/text that was entered: ", url.value);
}

