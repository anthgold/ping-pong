// Business Logic
$(document).ready(function() {
  $("form#number-taker").submit(function(event) {
    event.preventDefault();
    // Take user input and count up from 1 to the input
    var numberRange = $("input#number").val();
    var integer = parseInt(numberRange);

// User Interface Logic
    for (var i = 1; i <= numberRange; i++) {
      // alert(i);
      // To-do output a string counting up to the integer
    }
    console.log(typeof numberRange);
    console.log(typeof ("input#number"));
    console.log(typeof integer);

    $("#result").show();



  });
});
