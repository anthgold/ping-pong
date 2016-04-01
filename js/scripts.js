// Business Logic
$(document).ready(function() {
  $("form#number-taker").submit(function(event) {
    event.preventDefault();
    // Take user input and count up from 1 to the input
    var numberRange = $("input#number").val();
      // numberRange is a string
    // var integer = parseInt(numberRange);
      // integer is a number
    // If i is divisible by 3, substitute "ping" for string i
      // i will need to be converted to a string in a new variable


// User Interface Logic
    for (var i = 1; i <= numberRange; i++) {
      // i is also of type number
      var iAsString = i.toString();
      if (i % 15 === 0) {
        iAsString = "pingpong";
      } else if (i % 3 === 0) {
        iAsString = "ping";
      } else if (i % 5 === 0) {
        iAsString = "pong";
      }
      $("ul#result").append("<li>" + iAsString + "</li>")
    }

    // $("#result").show();

    // To-do: Hide old results on a re-submit

  });
});
