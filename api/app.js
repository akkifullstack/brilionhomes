require('./homesDB.js')
let express=require('express');
let cors = require('cors');
let app=express();
let routes=require('./routes/homesRoutes/homesRoutes.js');
let path=require('path');
let multer = require('multer')
let bodyParser=require('body-parser');

app.set('port',3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});
app.use('/brilliohomes',routes);
app.use(function(req, res, next){
	console.log(req.method, req.url)
	next();
})
let server = app.listen(app.get('port'),() => {
	let port = server.address().port;
	console.log("Connected to" + port);
})