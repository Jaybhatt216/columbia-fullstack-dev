const fs = require('fs');
const request = require("request");
var TV = function() {
  this.findShow = function(show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
  request(URL, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

  };
  let Data = JSON.parse(URL);
};
var showData = [
  "Show: " +   Data.name,
  "Genre(s): " + Data.genres.join(", "),
  "Rating: " + Data.rating.average,
  "Network: " + Data.network.name,
  "Summary: " + Data.summary
].join("\n\n");




fs.appendFile('log.txt', showData, function (err) {
  console.log(showData);
});
  
  
module.exports = TV;
