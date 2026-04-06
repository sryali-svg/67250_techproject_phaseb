/*
var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello";
var B = " world!"
var C = A + B;

L1 = ["Watermelon","Pineapple","Pear","Banana"];
L2 = ["Apple","Banana","Kiwi","Orange"];

console.log(C);
function sumnPrint(x1, x2) {
    console.log(x1+x2);
    if(C.length > z){
        console.log(C);
    } else if (C.length < z) {
        console.log(z)
    } else {
        console.log("good job!");
    }
}
sumnPrint(x, y);
sumnPrint(A, B);
function findTheBanana_Old(arr){
    for(var i=0; i < arr.length;i++){
        if(arr[i] == "Banana"){
            alert("Banana!");
        }
    }
}
function findTheBanana(arr){
    arr.forEach(fruit => {
        if(fruit == "Banana"){
            alert("Banana!!")
        }
    });
}
findTheBanana(L1);
findTheBanana(L2);
*/
var now = new Date();
var hour = now.getHours();
var welcome_message = ", Welcome to MonoMuse"
var copy_msg = " MonoMuse. All rights reserved.";

function greeting(h){
    var m;
    if(h < 5 || h >= 20){
        m = "Good night";
    } else if (h < 12) {
        m = "Good morning";
    } else if( h <= 18) {
        m = "Good afternoon";
    } else {
        m = "Good evening";
    }
    document.getElementById("greeting").innerHTML = m + welcome_message;

}
function addYear(){
    var yid = document.getElementById("copyYear");
    if(yid !== null) {
        yid.innerHTML = "© "+ new Date().getFullYear() + copy_msg;
    }
}
var gid = document.getElementById("greeting");
if(gid !== null) greeting(hour);

/* Sets the 'active' class on the navigation link that matches the current page URL.*/

function ActiveNav() {
    // Get all navigation links
    const navLinks = document.querySelectorAll("nav a");

    // Iterate over each link
    navLinks.forEach(link => {
    // Check if the link's href matches the current window location
        if (window.location.href === link.href) {
            // Add the 'active' class to highlight the current page
            link.classList.add("active");
        }
    });
}

 // When the "Read Less" button is clicked
 $("#readLess").click(function(){ 
    $("#longIntro").hide(); // Hide the long introduction text
    $("#readLess").hide();  // Hide the "Read Less" button itself
    $("#readMore").show();  // Show the "Read More" button  

  });
  
// When the "Read More" button is clicked
  $("#readMore").click(function(){
    $("#longIntro").show();  // Show the long introduction text
    $("#readLess").show();   // Show the "Read Less" button
    $("#readMore").hide();   // Hide the "Read More" button  
  });

  function showForm(){
      $("#purchaseSection").show();
  }

  function toggleMenu(x) {
    
    x.classList.toggle("change");

    var nav = document.getElementById("navBar");
    nav.classList.toggle("active");
}
var mapContainer = document.getElementById("map");
if (mapContainer) {
    var map = L.map('map').setView([40.4387, -79.9972], 12);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([40.4432, -79.9428]).addTo(map);
}