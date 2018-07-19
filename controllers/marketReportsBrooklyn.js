var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose');

  // Categories Schema
  var marketReportsBrkSchema = mongoose.Schema({
     NeighborhoodName: String,
     Quarter: String,
     Sales: Number,
     AveragePrice: String,
     MedianPrice: String,
     AveragePPRoom: String,
     DaysonMarket: Number,
     SellingVsAsking: String
  });

  var MarketReportsBrooklyns = mongoose.model('MarketReportsBrooklyns', marketReportsBrkSchema);

  // get one neighborhood market reports based on specific neighborhood name.
  router.post('/api/getOneNeighborhoodMRBrooklyn', function (request, response) {

    console.log("getOneNeighborhoodMRBrooklyn called");
    console.log("request.body.name:", request.body.name);

    MarketReportsBrooklyns.find({'NeighborhoodName': request.body.name}, function(err, mrRpOneNeibhorhood) {
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