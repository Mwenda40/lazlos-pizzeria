$(document).ready(function(){
  
    
    $("#btnhide").hide();
    $("#btnunhide").click(function(){
        $("#btnhide").toggle();
    });

    document.getElementById("done").addEventListener("click", location);
    function location(){
      address = document.getElementById("location").value;
      document.getElementById("btnhide").innerHTML = "Your order will be delivered to: " + address;
    }


    document.getElementById("chekout").addEventListener("click", checkout);
    function checkout(){

      var total = 0;
      var inputs = document.querySelectorAll('input');
    
      inputs.forEach(input => {
        if (input.checked)
          total += parseInt(input.value);
      })
    

      document.getElementById("results").innerHTML = "Total: Kshs "  + total ;
    
    }
});