$(document).ready(function(){

  $("#tacoSubmit").on("click", function(event){
    event.preventDefault();
    console.log("Click")
    var newTaco = {
      taco_name: $("#tacoForm").val().trim(),
      devoured: 0
    };

    $.ajax("/api/tacos", {
      type: "POST",
      data: newTaco
    }).then(function(){
      location.reload();
      console.log("posted");
    });
  });


});
