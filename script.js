$(document).ready(function(){

  let selectedPrice = 0;

  // Select Car
  $(".car-card").click(function(){
    selectedPrice = $(this).data("price");

    $(".car-card").removeClass("selected");
    $(this).addClass("selected");
  });

  // Calculate Total
  $("#calcBtn").click(function(){

    let name = $("#name").val();
    let email = $("#email").val();
    let days = $("#days").val();

    if(name === "" || email === "" || days === "" || selectedPrice === 0){
      alert("Please complete all fields & select a car!");
      return;
    }

    let total = selectedPrice * days;
    $("#total").text(total);
  });

});