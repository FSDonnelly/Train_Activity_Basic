var config = {
    apiKey: "AIzaSyALNlv3eJVbxHTpmmUxZyouj6v0OmL6ngQ",
    authDomain: "train-activity-basic-f06b3.firebaseapp.com",
    databaseURL: "https://train-activity-basic-f06b3.firebaseio.com",
    projectId: "train-activity-basic-f06b3",
    storageBucket: "",
    messagingSenderId: "399857633637"
  };
  firebase.initializeApp(config);

  // Create a variable to reference the database.
var database = firebase.database();

// Initial Values
var name = "";
var destination = "";
var first= 0;
var frequency = 0;

// Capture Button Click
$("#add-train-btn").on("click", function (event) {
  event.preventDefault();

  // Grabbed values from text-boxes
  name = $("#train-name-input").val().trim();
  destination = $("#destination-input").val().trim();
  first= $("#first-train-input").val().trim();
  frequency = $("#frequency-input").val().trim();

    // Code for handling the push
    database.ref().push({
        name: name,
        destination: destination,
        first: first,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
});
database.ref().on("child_added", function (snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();

    // Console.loging the last user's data
    // console.log(sv.name);
    // console.log(sv.destination);
    // console.log(sv.first-train);
    // console.log(sv.frequency);

    // Change the HTML to reflect
    // $("#train-name-input").text(sv.name);
    // $("#destination-input").text(sv.destination);
    // $("#age-display").text(sv.first-train);
    // $("#comment-display").text(sv.frequency);
    
    // Handle the errors
  }, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });

