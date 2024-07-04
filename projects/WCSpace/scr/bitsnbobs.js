document.addEventListener("DOMContentLoaded", function() {
    // Get the document's title
    var title = document.title;

    // Get all elements with the ID "articleTitle"
    var elements = document.querySelectorAll("#articleTitle");

    // Loop through the elements and set their inner HTML to the document's title
    elements.forEach(function(element) {
        element.innerHTML = title;
    });
});

// JavaScript to toggle the visibility of the nav content
document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggleButton");
    var navContent = document.getElementById("navcontent");

    toggleButton.addEventListener("click", function() {
        if (navContent.style.display === "none" || navContent.style.display === "") {
            navContent.style.display = "block";
        } else {
            navContent.style.display = "none";
        }
    });
});

// JavaScript to toggle the visibility of the nav content
document.addEventListener("DOMContentLoaded", function() {

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  // Get the button:
  let mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener("click", topFunction);

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
});

//Copywrite year thing
document.addEventListener("DOMContentLoaded", function() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  document.getElementById("currentYear").innerHTML = currentYear;
});

var coll = document.getElementsByClassName("collapsible3");
var i;




document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbarcontent");
    var htmlTemplate = `
        <div class="zone1">
            <b>Zone 1</b>
            <p>Placeholder...</p>
        </div>
        <div class="zone2">
            <b>Zone 2</b>
            <p>Placeholder...</p>
        </div>
        <div class="zone3">
            <b>Zone 3</b>
            <p>Placeholder...</p>
        </div>
        <div class="zone4">
            <b>Zone 4</b>
            <p>Placeholder...</p>
        </div>`;
    navbar.innerHTML = htmlTemplate;
    document.querySelectorAll("link[rel=stylesheet]").forEach(link => link.href = link.href.replace(/\?.*|$/, "?" + Date.now()))//Reloads CSS to fix a bug
});
