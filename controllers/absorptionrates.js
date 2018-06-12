var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose');

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
  router.get('/api/getMonthsAbsorption', function (request, response) {

    AbsorptionRates.find({}, { "Date": 1,"_id": 0 }, function(err, months) {
        if(err){
            // console.log(err);
            return res.status(500).send(err);
          } else{
              // console.log('months:', months);
              response.send(months);
          }
    });
  });

  // get the absorption data
  router.get('/api/getAbsorptionRates/:nmYr', function (request, response) {
    var reqNmYr = request.params.nmYr;
    // console.log("new Date(reqNmYr)", new Date(reqNmYr));

    AbsorptionRates.find({'Date': new Date(reqNmYr)}, function(err, absorptionRatess) {
        if(err){
            console.log(err);
            return res.status(500).send(err);
          } else{
              // console.log('absorptionRatess:', absorptionRatess);
              response.send(absorptionRatess);
          }
    });
  });


  module.exports = router;