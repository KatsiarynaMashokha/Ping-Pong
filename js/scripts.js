// business logic
var returnedNumber = function(number) {

}



// user interface logic
$(document).ready(function(){
  $("form#gameForm").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#number").val());
    $(".answer").append(userInput);
    $("#result").show();
  });
});
