var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose');

  // neighborhood Schema
  var neighborhoodsSchema = mongoose.Schema({
  	 type: String,
  	 features: Array
  });
  var Neighborhoods = mongoose.model('Neighborhoods', neighborhoodsSchema);

  // get the neighborhood coordinates.
  router.post('/api/getNeighborhoodsCoordinates', function (request, response) {
     // console.log('getNeighborhoodsCoordinates called request:', request.body);
     var selectedNeighborhoods = request.body;
    
     Neighborhoods.find({ 'features.properties.name' : { $in : selectedNeighborhoods }}, function(err, neighborhood) {
  	  if (err) throw err;
  	  // console.log("xx neighborhood:", neighborhood);
  	  response.send(neighborhood);		  
  	});

  });

  // get one neighborhood coordinates by its name.
  router.post('/api/getNeighborhoodCoordinates', function (request, response) {
     // console.log('getNeighborhoodCoordinates called request:', request.body);
     var nbr = request.body.name;

     Neighborhoods.find({ 'features.properties.name' : nbr}, function(err, neighborhood) {
      if (err) throw err;
      response.send(neighborhood);      
    });
  });

module.exports = router;