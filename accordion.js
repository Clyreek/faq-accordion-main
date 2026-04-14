var acc = document.getElementsByClassName("question-header");
var i;

// Functions
const displayActiveIcon = function( activeIcon, inactiveIcon ) {
  activeIcon.style.display = "block";
  inactiveIcon.style.display = "none";
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

