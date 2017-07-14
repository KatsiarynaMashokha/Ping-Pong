// business logic
var result = "";
var returnedNumber = function(number) {
  if (number >= 1) {
    return number;
  }
  else {
    alert("Please enter a number greater than 0!");
    return "";
  }

}



// user interface logic
$(document).ready(function(){
  $("form#gameForm").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#number").val());
    var finalNumber = returnedNumber(userInput);
    $(".answer").text(finalNumber);
    $("#result").show();
  });
});
