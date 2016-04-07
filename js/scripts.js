// Business Logic
var pingPongArray = [];

var pingPong = function(userInput) {
  for (var i = 1; i <= userInput; i++) {
    if (i % 15 === 0) {
      pingPongArray.push ("pingpong");
    } else if (i % 3 === 0) {
      pingPongArray.push ("ping");
    } else if (i % 5 === 0) {
      pingPongArray.push ("pong");
    } else {
      pingPongArray.push (i);
    }
  }
}

// User Interface Logic
$(document).ready(function() {
  $("form#number-taker").submit(function(event) {
    event.preventDefault();

    var numberRange = $("input#number").val();
    var result = pingPong(numberRange);

    pingPongArray = pingPongArray.join(", ");

    // As it counts up, append
    for (var i = 0; i < numberRange; i++) {
      $("ul#result").append("<li>" + pingPongArray + "</li>")
    };
  });
});
