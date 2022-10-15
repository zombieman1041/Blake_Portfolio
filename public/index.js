function mobileMenu() {
    var x = document.getElementById("mobileLink");
    var y = document.getElementById("close");
    var z = document.getElementById("open");
    if (x.style.display === "none") {
      x.style.display = "block";
      z.style.display = "none";
      y.style.display = "block";


    } else {
      x.style.display = "none";
      z.style.display = "block";
      y.style.display = "none";

    }
}

// setInterval(aboutHover, 1000);
// function aboutHover(){
//   var x = document.getElementById("");
//   x.style.transition = "opacity 250ms";
//   x.style.opacity = "1"; 

//   setTimeout(myTimeout, 1000);
//   function myTimeout(){
//     var x = document.getElementById("");
//     x.style.opacity = "0"; 
//   }
// }