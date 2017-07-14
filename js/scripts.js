// user interface logic
$(document).ready(function(){
  $("form#gameForm").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#number").val());
    alert(userInput);
  });
});
