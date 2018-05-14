let mongoose=require('mongoose');
let dburl="mongodb://localhost:27017/brilliohomes"

mongoose.connect(dburl);

mongoose.connection.on('connected',function(){
	console.log("	Mongoose Connected To: "+dburl);
})
mongoose.connection.on('disconnected',function(){
console.log(" Mongoose disconnected");
})
mongoose.connection.on('err',function(err){
	console.log("Error Occured: "+err);
})
process.on('SIGINT',function(){
	mongoose.connection.close(function(){
		console.log("Mongoose disconnected(SIGINT)")
		process.exit(0);
	})
})
require('./models/homesModel/homesModel.js')

