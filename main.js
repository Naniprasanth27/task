function calculatetotal() {
    var saltQuantity = document.getElementById("watchquantity").value;
    var saltPrice =document.getElementById("watchprice").value;
    var saltMargin = document.getElementById("watchmargin").value;
    let saltTotal = watchQuantity * watchPrice * watchmargin ;
    document.getElementById("watchtotal").textContent = watchTotal;

var groundnutsquantity = document.getElementById("mobilequantity").value;
var groundnutsprice = document.getElementById("mobileprice").value;
var groundnutsmargin = document.getElementById("mobilemargin").value;
let groundnutstotal =mobileQuantity * mobilePrice * mobilemargin ;
    document.getElementById("mobiletotal").textContent = mobileTotal;

var groundnutsquantity = document.getElementById("headsetquantity").value;
var groundnutsprice = document.getElementById("headsetprice").value;
var groundnutsmargin = document.getElementById("headsetmargin").value;
let groundnutstotal =headsetQuantity * headsetPrice * headsetmargin ;
    document.getElementById("headsettotal").textContent = headsetTotal;
    
    document.getElementById("total").textContent=watchTotal + mobileTotal + headsetTotal;
}
function checkcategory(){
    var age=document.getElementById("inputage").value;
    if(age=15){
        console.log("childrens using vivo mobile");
        document.getElementById("label1").textContent="childrens buying vivo mobile";
    }
    else if(age>=25 && age<=24){
        console.log("teenagers using oneplus mobile");
        document.getElementById("label1").textContent="teenagers buying oneplus mobile"; 
    }
    else if(age>=30 && age<=40){
        console.log("adults using samsung mobile");
         document.getElementById("label1").textContent="adults buying samsung mobile";
    }
    else{
        console.log("senior citizens using nokia mobile");
         document.getElementById("label1").textContent="senior citizens buying nokia mobile";
    }
    
  }

for (var i=15;i<=30;i++){
    console.log("count: " +i);
}
function greet(name){
    console.log("Hello, "+name);
}
greet("Prasanth");
greet("Nani");