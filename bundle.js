(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.beep = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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
},{"./beep.js":1}]},{},[2])(2)
});