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

// User Interface Logic
$(document).ready(function() {
  $("form#number-taker").submit(function(event) {
    event.preventDefault();

    var numberRange = $("input#number").val();
    var result = pingPong(numberRange);

    for (var i = 0; i < numberRange; i++) {
      $("ul#result").append("<li>" + pingPongArray[i] + "</li>")
    };  // Closes output loop
    $("#resubmit").show();
    $("form#number-taker").hide();
  });   // Closes take input

  $("#resubmit").click(function(event) {
    event.preventDefault();
    location.reload();
    $("#resubmit").hide();
    $("form#number-taker").show();
  });   // Closes refresh function

});     // Closes invoke JQuery
