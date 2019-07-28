$(document).ready(function(){
    $(".order").click(function(){
        $("#note").fadeOut();
        $("#para").slideToggle();
        $(".order").hide();
        $(".cancel").fadeIn();
        $(".size1").fadeIn();
    })
    $(".cancel").click(function(){
        $("#note").fadeIn();
        $("#para").slideToggle();
        $(".order").slideToggle();
        $(".cancel").fadeOut();
        $(".size1").fadeOut();
        $(".checkout").fadeOut();
;    })
})
function selectSize() {
    var size = document.getElementById("size").value;
    if (size === "1") {
      alert("OOps seems like you havent selected a size");
      return false;
    }
    else if (size==="2"){
        $(".checkout").fadeIn();
        $("#section2").fadeOut();
        $("#click2").fadeIn();
        $("#click").hide();
        $(".out").show();
    }
    else if (size==="3"){
        $(".checkout").fadeIn();
        $("#section2").fadeOut();
        $("#click2").fadeIn();
        $("#click").hide();
    }
    else if (size==="4"){
        $(".checkout").fadeIn();
        $("#section2").fadeOut();
        $("#click2").fadeIn();
        $("#click").hide();
    }
    
  }