var mongoose=require('mongoose');
var Homes=mongoose.model('homes');

module.exports.getAllDeals=function(req,res){
	Homes
		.find()
		.exec(function(err,Homey){
			if(err){
				console.log("Error Occured while Bringing Data");
				res
					.status(500)
					.json(err);
			}
			else{
				console.log("Total Homes Found", Homey.length);
				res
					.status(200)
					.json({"homes":Homey})
			}
		})
}