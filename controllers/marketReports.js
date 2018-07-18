var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose');

  // Categories Schema
  var marketReportsSchema = mongoose.Schema({
     NeighborhoodName: String,
     Quarter: String,
     Sales: Number,
     AveragePrice: String,
     MedianPrice: String,
     AveragePPRoom: String,
     DaysonMarket: Number,
     SellingVsAsking: String
  });

  var MarketReportsManhattans = mongoose.model('MarketReportsManhattans', marketReportsSchema);

  // get one neighborhood market reports based on specific neighborhood name.
  router.post('/api/getOneNeighborhoodMReport', function (request, response) {

    console.log("getOneNeighborhoodMReport called");
    console.log("request.body.name:", request.body.name);

    MarketReportsManhattans.find({'NeighborhoodName': request.body.name}, function(err, mrRpOneNeibhorhood) {
        if(err){
            console.log(err);
            return res.status(500).send(err);
          } else{
              console.log('mrRpOneNeibhorhood:', mrRpOneNeibhorhood);
              response.send(mrRpOneNeibhorhood);
          }
    }); 
  });


  module.exports = router;