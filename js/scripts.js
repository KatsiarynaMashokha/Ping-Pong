// business logic
//var result = [];
var returnedNumber = function(number) {
  var result = [];
  if (number >= 1) {
    for (var i = 1; i <= number; i++) {
      result.push(i);
    }
      console.log(result);
  }
  else {
    alert("Please enter a number greater than 0!");
    //return "";
    result = "";
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
