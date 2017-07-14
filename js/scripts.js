// business logic
var returnedNumber = function(number) {
  var result = [];
  if (number >= 1) {
    for (var i = 1; i <= number; i++) {
      var word = "";
      if (i % 3 === 0) {
        word = "ping";
      }
      else {
        word = i;
      }
      result.push(word);
    }
      console.log(result);
  }
  else {
    alert("Please enter a number greater than 0!");
    result = "";
  }
return result;
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
