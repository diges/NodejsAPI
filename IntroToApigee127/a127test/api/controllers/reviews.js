var request = require('request');
var config=require('../../config');

module.exports = {
	getReviews:getReviews,
	postReview:postReview
	//getReviewsByID:getReviewsByID
}

/*http://api.usergrid.com/diges/sandbox/rewievs

function getReviews (req, res) {
	request(config.UG + "/reviews", function(error, response, body) { 
		if (error) {
			res.send(error);
		}else {
			res.send(body);
		}
	});
}

*/

//http://172.16.1.25:10010/reviews?restID=2
function getReviews (req,res) {
	var restID=req.swagger.params.restID.value;
	var ql="";
	if (restID) {
		ql="?ql=restID="+restID;
	}
	request(config.UG + "/reviews"+ql, function(error, response, body) { 
		if (error) {
			res.send(error);
		}else {
			res.send(body);
			//res.json(body);
		}
	});
}
function postReview (req,res) {
	request.post(config.UG+"/reviews",{form: JSON.stringify(req.body)}, function(error, response, body) {
                            if (error) {
                                res.send(error);
                            } else {
                                data = JSON.parse(body);
                            }
                        })
}
