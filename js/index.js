// responsive nav
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnavigation") {
      x.className += " respon1";
    } else {
      x.className = "topnavigation";
    }
  }