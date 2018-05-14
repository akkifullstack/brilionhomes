let mongoose =require('mongoose');

let allHomesSchema= new mongoose.Schema({
	address_Line1:{
		type:String,
		required:true
	},
	broker_name:{
		type:String,
		required:true
	},
	broker_company:{
		type:String,
		required:true
	},
	prop_type:{
		type:String,
		required:true
	},
	price:{
		type:Number,
		required:true
	}
})

mongoose.model('homes',allHomesSchema,'homedetails');