var express =require('express');
var app=express();
var async=require('async');

//routs
app.use ('/',  express.static(__dirname)); //static HTML

app.get ('/hello', function (req, res){
	res.send('Hi');
});


app.get ('/today', function (req, res){
	var today = new Date();
	res.send(200, {today:today});
});


app.listen(1337, function(req,res) {
	console.log('Server is running');
})

