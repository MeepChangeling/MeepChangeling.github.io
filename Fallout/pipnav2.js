// Adds Navbar to pages within a folder.

var navbar = `<nav>
  <span class="navtitle" id="navtitle">` + document.title + `</span>
  <div class="dropdown">
    <button class="dropbtn">World
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="../world/worldindex.html">World Index</a>
      <a href="../world/regionindex.html">Region Index</a>
      <a href="../world/factionindex.html">Faction Index</a>
      <a href="../docs/timeline.html">Timeline</a>
      <a href="../docs/races.html">Races and Species</a>
    </div>
  </div>

  <div class="dropdown">
    <button class="dropbtn">Texas Badlands
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="../locations/TexasBadlands.html">Overview</a>
    </div>
  </div>


</nav>`;
var el = document.getElementById("navcontainer");
el.insertAdjacentHTML('afterbegin', navbar);

// Adds Button Pannel to pages within a folder.

var buttons = `<button type="button" name="button" class="redglow" onclick="location.href='../utilities/falloutwiki.html';"></button><span class=buttontext>Database</span>
</br>
<button type="button" name="button" class="redglow" onclick="location.href='../utilities/blank.html';"></button><span class=buttontext>Test Page</span>
</br>
<button type="button" name="button" class="redglow" onclick="location.href='../worldmap.html';"></button><span class=buttontext>World Map</span>
</br>
<button type="button" name="button" class="redglow" onclick="location.href='../localmap.html';"></button><span class=buttontext>Local Map</span>
</br>
<button type="button" name="button" class="redglow"></button><span class=buttontext>testing</span>`;
var el1 = document.getElementById("buttonpannel");
el1.insertAdjacentHTML('afterbegin', buttons);

// Script for Colapses on pages within a folder.

document.addEventListener("DOMContentLoaded", function() {
  var coll = document.getElementsByClassName("collapsible");
  var i;
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        setTimeout(function() {
          content.style.maxWidth = null;
          content.classList.remove("content-border");
        }, 220); // delay the max-width transition by 0.2 seconds
      } else {
        content.style.maxWidth = "95%";
        setTimeout(function() {
          content.style.maxHeight = content.scrollHeight + "px";
          content.classList.add("content-border");
        }, 150); // delay the max-height transition by 0.2 seconds
      }
    });
  }
});
