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
        })
    $(".cancel2").click(function(){
        $(".note2").fadeIn();
        $("#para2").slideToggle();
        $(".order2").slideToggle();
        $(".cancel2").fadeOut();
        $(".size2").fadeOut();
    })
    $(".order2").click(function(){
        $(".note2").fadeOut();
        $("#para2").fadeIn();
        $(".order2").hide();
        $(".cancel2").fadeIn();
        $(".size2").fadeIn();
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
function select() {
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
l();
mid();
smal();