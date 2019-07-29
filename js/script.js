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
        $("#note").fadeIn(500);
        $("#para").slideToggle(500);
        $(".order").slideToggle(500);
        $(".cancel").fadeOut(00);
        $(".size1").fadeOut(500);
        $(".checkout").fadeOut(500);
        })
    $(".cancel2").click(function(){
        $(".note2").fadeIn(500);
        $("#para2").slideToggle(500);
        $(".order2").slideToggle(500);
        $(".cancel2").fadeOut(500);
        $(".size2").fadeOut(500);
    })
    $(".order2").click(function(){
        $(".note2").fadeOut(500);
        $("#para2").fadeIn(500);
        $(".order2").hide();
        $(".cancel2").fadeIn(500);
        $(".size2").fadeIn(500);
    })
    $(".cancel3").click(function(){
        $(".note3").fadeIn(500);
        $("#para3").slideToggle(500);
        $(".order3").slideToggle(500);
        $(".cancel3").fadeOut(500);
        $(".size3").fadeOut(500);
    })
    $(".order3").click(function(){
        $(".note3").fadeOut(500);
        $("#para3").fadeIn(500);
        $(".order3").hide();
        $(".cancel3").fadeIn(500);
        $(".size3").fadeIn(500);
    })
    $(".cancel4").click(function(){
        $(".note4").fadeIn(500);
        $("#para4").slideToggle(500);
        $(".order4").slideToggle(500);
        $(".cancel4").fadeOut(500);
        $(".size4").fadeOut(500);
    })
    $(".order4").click(function(){
        $(".note4").fadeOut(500);
        $("#para4").fadeIn(500);
        $(".order4").hide();
        $(".cancel4").fadeIn(500);
        $(".size4").fadeIn(500);
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
    var size = document.getElementById("size").value;
    if (size < "1") {
      alert("OOps seems like you haven't selected a size");
      return false;
    }
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
    alert("your order has been received thank you for flambeing")
    return true
}
l();
mid();
smal();