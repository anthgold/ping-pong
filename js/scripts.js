
// Business Logic
$(document).ready(function() {
  $("form#number-converter").submit(function(event) {
    var arabicNumber = $("input.arabic-number").val();
    var reverseNumber = arabicNumber.toString().split("").reverse().join("");

    ones = parseInt(reverseNumber.charAt(0));
    tens = parseInt(reverseNumber.charAt(1));
    hundreds = parseInt(reverseNumber.charAt(2));
    thousands = parseInt(reverseNumber.charAt(3));

    reverseNumber = reverseNumber;

    var romanThousands = '';
    var romanHundreds = '';
    var romanTens = '';
    var romanOnes = '';

    if (thousands === 0) {
      romanThousands = "";
    } else if (thousands === 1) {
      romanThousands = "M";
    } else if (thousands === 2) {
      romanThousands = "MM";
    } else if (thousands === 3) {
      romanThousands = "MMM";
    // } else {
    //   alert('Thousands place is NaN!');
    }

    if (hundreds === 0) {
      romanHundreds = "";
    } else if (hundreds === 1) {
      romanHundreds = "C";
    } else if (hundreds === 2) {
      romanHundreds = "CC";
    } else if (hundreds === 3) {
      romanHundreds = "CCC";
    } else if (hundreds === 4) {
      romanHundreds = "CD";
    } else if (hundreds === 5) {
      romanHundreds = "D";
    } else if (hundreds === 6) {
      romanHundreds = "DC";
    } else if (hundreds === 7) {
      romanHundreds = "DCC";
    } else if (hundreds === 8) {
      romanHundreds = "DCCC";
    } else if (hundreds === 9) {
      romanHundreds = "CM";
    // } else {
    //   alert('Hundreds place is NaN!');
    }

    if (tens === 0) {
      romanTens = "";
    } else if (tens === 1) {
      romanTens = "X";
    } else if (tens === 2) {
      romanTens = "XX";
    } else if (tens === 3) {
      romanTens = "XXX";
    } else if (tens === 4) {
      romanTens = "XL";
    } else if (tens === 5) {
      romanTens = "L";
    } else if (tens === 6) {
      romanTens = "LX";
    } else if (tens === 7) {
      romanTens = "LXX";
    } else if (tens === 8) {
      romanTens = "LXXX";
    } else if (tens === 9) {
      romanTens = "XC";
    // } else {
    //   alert('Tens place is NaN!');
    }

    if (ones === 0) {
      romanOnes = "";
    } else if (ones === 1) {
      romanOnes = "I";
    } else if (ones === 2) {
      romanOnes = "II";
    } else if (ones === 3) {
      romanOnes = "III";
    } else if (ones === 4) {
      romanOnes = "IV";
    } else if (ones === 5) {
      romanOnes = "V";
    } else if (ones === 6) {
      romanOnes = "VI";
    } else if (ones === 7) {
      romanOnes = "VII";
    } else if (ones === 8) {
      romanOnes = "VIII";
    } else if (ones === 9) {
      romanOnes = "IX";
    // } else {
    //   alert('Ones place is NaN!');
    }

// User Interface Logic

    event.preventDefault();
    var thousands = 0;
    var hundreds = 0;
    var tens = 0;
    var ones = 0;

    var romanNumber = romanThousands.concat(romanHundreds,romanTens,romanOnes);

    // alert(arabicNumber + " in Roman numberals is: " + romanNumber);
    $(".arabic-number").text(arabicNumber);
    $("#romanNumber").text(romanNumber);
    $("#result").show();

  });
});
