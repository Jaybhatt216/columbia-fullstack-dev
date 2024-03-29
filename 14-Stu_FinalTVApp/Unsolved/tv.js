var request = require("request");
var fs = require("fs");

// Create the TV constructor
var TV = function() {
  // divider will be used as a spacer between the tv data we print in log.txt
  var divider =
    "\n------------------------------------------------------------\n\n";

  // findShow takes in the name of a tv show and searches the tvmaze API
  this.findShow = function(show) {
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

    request(URL, function(err, response, body) {
      // parse the response body (string) to a JSON object
      var jsonData = JSON.parse(body);

      // showData ends up being the string containing the show data we will print to the console
      var showData = [
        "Show: " + jsonData.name,
        "Genre(s): " + jsonData.genres.join(", "),
        "Rating: " + jsonData.rating.average,
        "Network: " + jsonData.network.name,
        "Summary: " + jsonData.summary
      ].join("\n\n");

      // Append showData and the divider to log.txt, print showData to the console
      fs.appendFile("log.txt", showData + divider, function(err) {
        if (err) throw err;
        console.log(showData);
      });
    });
  };

  this.findActor = function(actor) {
    var URL = "http://api.tvmaze.com/search/people?q=" + actor;
    request(URL, function(err, response, body) {
      var Data = JSON.parse(body)[0].person;
      var actorData = [
        "Actor: " + Data.person.name,
        "Birthday: " + Data.person.birthday,
        "Gender: " + Data.person.gender,
        "Country: " + Data.person.country.name
      ].join("\n\n");
      fs.appendFile("log.txt", actorData + divider, function(err) {
        if (err) throw err;
        console.log(actorData);
      });
    });
  };

    // Add code to search the TVMaze API for the given actor
    // The API will return an array containing multiple actors, just grab the first result
    // Append the actor's name, birthday, gender, country, and URL to the `log.txt` file
    // Print this information to the console
  };
module.exports = TV;
