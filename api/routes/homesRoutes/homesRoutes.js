var express=require('express');
var router=express.Router();
var ctrlHomes=require('../../controllers/homesController/homesController.js');
var mongoose=require('mongoose');
var Homes=mongoose.model('homes');
var multer=require('multer');
var upload=multer();

router
	.route('/getAll')
	.get(ctrlHomes.getAllDeals)

router
	.post('/add',upload.array(),function(req,res,next){
		console.log(req.body);
		Homes
			.create(req.body,function(err,addHome){
			if(err){
				console.log("Err Occured while making Home"+err);

				res	
					.status(400)
					.json(err)
			}
			else{
				console.log("Successfully Created Home");
				res
					.status(201)
					.json({addHome})
			}
			})
	})
module.exports=router;