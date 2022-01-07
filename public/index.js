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