// Business Logic
$(document).ready(function() {
  $("form#number-taker").submit(function(event) {
    event.preventDefault();
    var numberRange = $("input#number").val();
    for (var i = 1; i <= numberRange; i++) {
      var iAsString = i.toString();
      if (i % 15 === 0) {
        iAsString = "pingpong";
      } else if (i % 3 === 0) {
        iAsString = "ping";
      } else if (i % 5 === 0) {
        iAsString = "pong";
      }
// User Interface Logic
      $("ul#result").append("<li>" + iAsString + "</li>")
    }
    // To-do: Hide old results on a re-submit
  });
});
