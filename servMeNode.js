var express = require("express");  

var myServer = express();

myServer.listen(8080,function(){
	console.log("Server Lives!")});


myServer.use(express.static("./content"));



