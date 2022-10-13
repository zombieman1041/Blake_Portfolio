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
function AOI_toggle() {
  var x = document.getElementById("AOI-toggle");
  var xx = document.getElementById("AOI");

  if (x.style.display != "block"){
    x.style.display = "block";
    xx.style.opacity = "1";
  }
  else{
    x.style.display = "none";
    xx.style.opacity = "0.6";
  }


}
function volunteer_toggle() {

  var y = document.getElementById("volunteer-toggle");
  var yy = document.getElementById("volunteer");


  if (y.style.display != "block"){
    y.style.display = "block";
    yy.style.opacity = "1";
  }
  else{
    y.style.display = "none";
    yy.style.opacity = "0.6";
  }
}