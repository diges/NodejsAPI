var request = require('request');
var config=require('../../config');
var async=require('async');

module.exports = {
	getRestaurants:getRestaurants,
	getRestaurantByID:getRestaurantByID
}

function getRestaurants (req, res) {
	request(config.UG + "/restaurants", function(error, response, body) { 
		if (error) {
			res.send(error);
		}else {
			res.send(body);
		}
	});
}

//http://api.usergrid.com/diges/sandbox/restaurants?ql=restID=1

function getRestaurantByID (req,res) {
	var restID=req.swagger.params.id.value;
	async.parallel({
		//first func
		restaurant: function (callback) {
			request(config.UG + "/restaurants?ql=restID="+restID, function(error, response, body) { 
				if (error) {
					res.send(error);
				}else {
					//res.send(body);
					//res.json(body);
					var results= JSON.parse(body);
					callback(null, results);
				}
			});
	
		},
		//second func
		reviews: function (callback) {
			
			/*async.waterfall([
				function(){},
				function(){}
			], callback); */
			async.waterfall([
				function(){},
				function(){}
			], callback);
			
			request(config.server + "/reviews?restID="+restID, function(error, response, body) { 
				if (error) {
					res.send(error);
				}else {
					//res.send(body);
					//res.json(body);
					var results= JSON.parse(body);
					callback(null, results);
				}
			});
		}
		},
		//when 2 in parralel done do callback
		function (err, data) {
			res.send(data);
		})
	
	
	
	
	
	
}
