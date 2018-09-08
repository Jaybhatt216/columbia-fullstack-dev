// Initialize Firebase (YOUR OWN APP)
// Make sure that your configuration matches your firebase script version
// (Ex. 3.0 != 3.7.1)

// Create a variable to reference the database
// var database = ...


// Use the below initialValue
var initialValue = 100;

// Use the below variable clickCounter to keep track of the clicks.
var clickCounter = initialValue;

// --------------------------------------------------------------
var config = {
  apiKey: "AIzaSyDfaTnzOF8xBIOldXSMwIm6-qRIxy8HPaY",
  authDomain: "test1-24c63.firebaseapp.com",
  databaseURL: "https://test1-24c63.firebaseio.com",
  projectId: "test1-24c63",
  storageBucket: "test1-24c63.appspot.com",
  messagingSenderId: "854765403546"
};
firebase.initializeApp(config);
// At the initial load and on subsequent data value changes, get a snapshot of the current data. (I.E FIREBASE HERE)
// This callback keeps the page updated when a value changes in firebase.
// HINT: Assuming 'database' is our database variable, use...
// database.ref().on("value", function(snapshot)) {}

// We are now inside our .on function...

// Console.log the "snapshot" value (a point-in-time representation of the database)
// This "snapshot" allows the page to get the most current values in firebase.


// Change the value of our clickCounter to match the value in the database
// ___________ = snapshot.val().______________________

// Console Log the value of the clickCounter

// Change the HTML using jQuery to reflect the updated clickCounter value

// Then include Firebase error logging
// HINT: }, function(errorObject)

// --------------------------------------------------------------

var database = firebase.database();
// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;

  // Alert User and reset the counter
  if (clickCounter === 0) {

    alert("Phew! You made it! That sure was a lot of clicking.");

    clickCounter = initialValue;

  }

  // Save new value to Firebase

  database.ref().set({
    clickCount: clickCounter
  });
  // Log the value of clickCounter
  console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;

  // Save new value to Firebase

  database.ref().set({
    clickCount: initialValue
  });
  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values
  $("#click-value").text(clickCounter);
// upadting the dom with the value of the database, using the .on('value') listen for changes in the database and log out the most recent values
    database.ref().on("value", function(snapshot) {
      console.log(snapshot.val());
      //update the value of the span with the current click count from the database
      $("#click-value").text(clickCounter);
      //setting the click counter to the value of the database
      clickCounter = snapshot.val().clickCount;
      //if there is some error is occured during the obtaining of the firebase data base 
    }, function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    });

});
