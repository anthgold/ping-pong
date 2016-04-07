// Business Logic
var pingPongArray = [];

var pingPong = function(whatever) {
  for (var i = 1; i <= whatever; i++) {
    if (i % 15 === 0) {
      pingPongArray.push ("pingpong");
    } else if (i % 3 === 0) {
      pingPongArray.push ("ping");
    } else if (i % 5 === 0) {
      pingPongArray.push ("pong");
    } else {
      pingPongArray.push (i);
    };
  };
};

// Where is the bug?
// Iterate once, say at 3
// The second time, iterate at 15
// It will then go 1,2,3,1,2,3 to 12
// I think it sets 0-2 of the array, then sets 3-14 starting at 1
// So I need to reset numberRange on a re-submit

// User Interface Logic
$(document).ready(function() {
  $("form#number-taker").submit(function(event) {
    event.preventDefault();

    var numberRange = $("input#number").val();
    var result = pingPong(numberRange);

    for (var i = 0; i < numberRange; i++) {
      $("ul#result").append("<li>" + pingPongArray[i] + "</li>")
    };  // Does Loop
  });   // Takes Input
});     // Invokes JQuery
