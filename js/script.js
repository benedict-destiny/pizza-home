var sze = parseInt(document.getElementById("size").value)
 function the(){

 }
const large = parseInt(1000);
 function l(){
}
const medium = parseInt(800);
 function mid(){

 }
const small = parseInt();
function smal(){

}
$(document).ready(function(){
    $(".order").click(function(){
        $("#note").fadeOut(0);
        $("#para").slideToggle(500);
        $(".order").hide(00);
        $(".cancel").fadeIn(800);
        $(".size1").fadeIn(800);
    })
    $(".cancel").click(function(){
        $("#note").fadeIn(800);
        $("#para").slideToggle(500);
        $(".order").slideToggle(500);
        $(".cancel").fadeOut(0);
        $(".size1").fadeOut(0);
        $(".checkout").fadeOut(0);
        })
    $(".cancel2").click(function(){
        $(".note2").fadeIn(500);
        $("#para2").slideToggle(500);
        $(".order2").slideToggle(500);
        $(".cancel2").fadeOut(0);
        $(".size2").fadeOut(0);
    })
    $(".order2").click(function(){
        $(".note2").fadeOut(00);
        $("#para2").fadeIn(500);
        $(".order2").hide();
        $(".cancel2").fadeIn(800);
        $(".size2").fadeIn(800);
    })
    $(".cancel3").click(function(){
        $(".note3").fadeIn(500);
        $("#para3").slideToggle(500);
        $(".order3").slideToggle(500);
        $(".cancel3").fadeOut(0);
        $(".size3").fadeOut(0);
    })
    $(".order3").click(function(){
        $(".note3").fadeOut(0);
        $("#para3").fadeIn(500);
        $(".order3").hide();
        $(".cancel3").fadeIn(800);
        $(".size3").fadeIn(800);
    })
    $(".cancel4").click(function(){
        $(".note4").fadeIn(500);
        $("#para4").slideToggle(500);
        $(".order4").slideToggle(500);
        $(".cancel4").fadeOut(0);
        $(".size4").fadeOut(0);
    })
    $(".order4").click(function(){
        $(".note4").fadeOut(0);
        $("#para4").fadeIn(500);
        $(".order4").hide();
        $(".cancel4").fadeIn(800);
        $(".size4").fadeIn(800);
    })
})


function selectLarge() {
    var size = document.getElementById("size").value;
    if (size === "1") {
      alert("OOps seems like you haven't selected a size");
      return false;
    }
    // else if (size==="2"){
    //     $(".checkout").fadeIn();
    //     $("#section2").fadeOut();
    //     $("#click2").fadeIn();
    //     $("#click").hide();
    //     $(".out").show();
    // }
    // else if (size==="3"){
    //     $(".checkout").fadeIn();
    //     $("#section2").fadeOut();
    //     $("#click2").fadeIn();
    //     $("#click").hide();
    //     $(".out").show();
    // }
    // else if (size==="4"){
    //     $(".checkout").fadeIn();
    //     $("#section2").fadeOut();
    //     $("#click2").fadeIn();
    //     $("#click").hide();
    // }
    
  }
function selectLarge() {
   
        alert(sze)
    // var size = document.getElementById("size").value;
    // if (size < "1") {
    //   alert("OOps seems like you haven't selected a size");
    //   return false;
    // }
    // else if (size==="2"){
    //     $(".checkout").fadeIn();
    //     $("#section2").fadeOut();
    //     $("#click2").fadeIn();
    //     $("#click").hide();
    //     $(".out").show();
    //     document.getElementById("total").innerHTML = "the total is: " + large;
    // }
    // else if (size==="3"){
    //     $(".checkout").fadeIn();
    //     $("#section2").fadeOut();
    //     $("#click2").fadeIn();
    //     $("#click").hide();
    //     $(".out").show();
    // }
    // else if (size==="4"){
    //     $(".checkout").fadeIn();
    //     $("#section2").fadeOut();
    //     $("#click2").fadeIn();
    //     $("#click").hide();
    // }
    
  }
function selectQuantity(){
 var many=parseInt($("#num").val())
    if (many< 1 ){
    alert("you havent specified on the number of pizaas")
    return false;
    }
    else if (many>1 || many==1) {
    $(".checkout").fadeIn();
    $("#section2").fadeOut();
    $("#click2").fadeIn();
    $("#click").hide();
    $(".out").show(); 
    var tot = large * many
    document.getElementById("total").innerHTML= "total is: " + tot;
    }
 
}

function post(){

    var response=confirm("wold you like your order to be delivered to you location")
    if (response == true){
        var loc = prompt("enter your location");
        var main =loc.toUpperCase()
        alert("order has been received and will be delivered to " + main);  
    }
    else if(response==false){
    alert("your order has been received You'll receive a message once your order is ready. Thank you for flambeing");
    return true;
    }
}


l();
mid();
smal();
the()
