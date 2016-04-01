// Business Logic
$(document).ready(function() {
  $("form#number-taker").submit(function(event) {
    event.preventDefault();
    // Take user input and count up from 1 to the input
    var numberRange = $("input#number").val();
    // numberRange is a string
    var integer = parseInt(numberRange);
    // integer is a number

// User Interface Logic
    for (var i = 1; i <= numberRange; i++) {
      // i is also of type number
      $("ul#result").append("<li>" + i + "</li>")
    }
    console.log(typeof numberRange);
    console.log(typeof integer);
    console.log(typeof i);

    // $("#result").show();

  });
});
