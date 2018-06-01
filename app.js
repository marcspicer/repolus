const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
app.use(bodyParser.json());
// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// serve the angular index file work
const path = require('path');
const port = 3000;
// serve static assets normally
app.use(express.static(__dirname + '/dist'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).

// app.get('*', function (request, response) {
//   response.sendFile(path.resolve(__dirname, 'index.html'));
// });

// end serve the angular index file work

app.use(cors());
// connection to mongodb
var mongoose = require('mongoose');
var database = 'mongodb://localhost/repolus';
mongoose.connect(database).then(
() => { console.log('MongoDb is readay to use.'); },
err => { console.log('handle initial connection error to MongoDb'); }
);

app.get('/api/testing', function (request, response) {
  response.send("Repolus Backend is working.......");
});

// neighborhood work starts
// neighborhood Schema
var neighborhoodsSchema = mongoose.Schema({
	 type: String,
	 features: Array
});
// user Model
var Neighborhoods = mongoose.model('Neighborhoods', neighborhoodsSchema);

// get the neighborhood coordinates.
app.post('/api/getNeighborhoodsCoordinates', function (request, response) {

   // console.log('getNeighborhoodsCoordinates called request:', request.body);
   var selectedNeighborhoods = request.body;
   
   Neighborhoods.find({ 'features.properties.name' : { $in : selectedNeighborhoods }}, function(err, neighborhood) {
	  if (err) throw err;
	  // console.log("xx neighborhood:", neighborhood);
	  response.send(neighborhood);		  
	});

});

// get one neighborhood coordinates by its name.
app.post('/api/getNeighborhoodCoordinates', function (request, response) {
   // console.log('getNeighborhoodCoordinates called request:', request.body);
   var nbr = request.body.name;

   Neighborhoods.find({ 'features.properties.name' : nbr}, function(err, neighborhood) {
    if (err) throw err;
    response.send(neighborhood);      
  });
});

// categories work starts
// Categories Schema
var categoriesSchema = mongoose.Schema({
	 _id: mongoose.Schema.Types.ObjectId,
	 address: String,
	 name: String,
	 neighborhood: String,
	 phone_number: String,
	 category: String,
	 location: {
	 	lat: Number,
	 	lng: Number
	 },
   articleLink: String
});
// Categories Model
var Categories = mongoose.model('Categories', categoriesSchema);

// get the categories coordinates based on neighborhood.
app.post('/api/getCategoriesCoordinates', async function (request, response) {

  var selectedDataCategories = request.body;	
  console.log("selectedDataCategories:", selectedDataCategories);

 // get all the categories
  var requiredDataCategories = [];

   for (var i =0; i< selectedDataCategories[0].neighborhoods.length; i++) {
   	for (var j =0; j< selectedDataCategories[1].categories.length; j++) {
   		await Categories.find({
   		       $and: [
   		           {"neighborhood": selectedDataCategories[0].neighborhoods[i]},
   		           {"category": selectedDataCategories[1].categories[j]}
   		       ]
   		   }, function(err, category) {
   			  if (err) throw err;
   			  // console.log("category:", category);
   			  if(category[0] !== undefined)
   			  requiredDataCategories.push(category);		  
   			});
   	}
   }	

  response.send(requiredDataCategories);
  console.log('send requiredDataCategories:', requiredDataCategories);

});

// save the categories.
app.post('/api/saveCategoriesCoordinates', function (request, response) {

	var selectedObject = {},
		mongooseId;

	mongooseId= new mongoose.Types.ObjectId();
	selectedObject = new Categories(request.body);
	selectedObject._id = mongooseId;

	// console.log("save final object selectedObject:", selectedObject);

	selectedObject.save(function(err) {
	    if (err) throw err;
	 	
	    console.log('category successfully saved.');
	});

	response.send("response: data is seved successfully");

});

// delete category.
app.delete('/api/deleteCategory/:catId', function (request, response) {

  console.log("delete category request.body:", request.params.catId);

  Categories.findByIdAndRemove(request.params.catId, (err, cat) => {  
      if (err) return res.status(500).send(err);
      console.log('Category successfully deleted.');
  });
  response.send("response: Category successfully deleted");
});

// absorption rate work
// Categories Schema
var absorptionRatesSchema = mongoose.Schema({
   neighborhoodName: String,
   APT: String,
   CONDO: String,
   COOP: String,
   DateByMonth: Date
});

var AbsorptionRates = mongoose.model('AbsorptionRates', absorptionRatesSchema);

// get the dates for absorption dropdown
app.get('/api/getMonthsAbsorption', function (request, response) {

  AbsorptionRates.find({}, { "Date": 1,"_id": 0 }, function(err, months) {
      if(err){
          console.log(err);
          return res.status(500).send(err);
        } else{
            console.log('months:', months);
            response.send(months);
            // var months = [];
            // for (var i = 0; i < res.length; i++) {
            //   months.push(res[i].Date); 
            // } 
        }
  });
});

// get the absorption data
app.get('/api/getAbsorptionRates/:nmYr', function (request, response) {
  var reqNmYr = request.params.nmYr;
  console.log("new Date(reqNmYr)", new Date(reqNmYr));

  AbsorptionRates.find({'Date': new Date(reqNmYr)}, function(err, absorptionRatess) {
      if(err){
          console.log(err);
          return res.status(500).send(err);
        } else{
            console.log('absorptionRatess:', absorptionRatess);
            response.send(absorptionRatess);
        }
  });
});

var server = app.listen(port, function() {
  var host = server.address().address;
  var port = server.address().port;		
  console.log('Repolus Server listening on', port);
});