// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)


// Assign the reference to the database to a variable named 'database'
// var database = ...


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;
var database = firebase.database()
// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDfaTnzOF8xBIOldXSMwIm6-qRIxy8HPaY",
    authDomain: "test1-24c63.firebaseapp.com",
    databaseURL: "https://test1-24c63.firebaseio.com",
    projectId: "test1-24c63",
    storageBucket: "test1-24c63.appspot.com",
    messagingSenderId: "854765403546"
  };
  firebase.initializeApp(config);
database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    // highPrice = ...
    // highBidder = ...
    database.ref().set({
    highPrice: highPrice,
    highBidder: highBidder
  });

  database.ref().on("value", function(snapshot) {

    // Print the initial data to the console.
    console.log(snapshot.val());

    // Log the value of the various properties
    console.log(snapshot.val().name);
    console.log(snapshot.val().age);
    console.log(snapshot.val().phone);

    // Change the HTML to reflect the stored values


    // Print the data to the console.


  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {
    highBidder = initialBidder;
    highPrice = initialBid
  };

    // Change the HTML to reflect the initial values


 

// If any errors are experienced, log them to console.

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values


  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase


    // Log the new High Price


    // Store the new high price and bidder name as a local variable


    // Change the HTML to reflect the new high price and bidder

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

