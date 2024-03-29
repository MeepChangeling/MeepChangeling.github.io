// Adds Navbar to pages at root.

var navbar = `<nav>
  <span class="navtitle" id="navtitle">` + document.title + `</span>
  <span class="navmobilehelper">
    <div class="dropdown">
      <button class="dropbtn">World
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="world/worldindex.html">World Index</a>
        <a href="world/regionindex.html">Region Index</a>
        <a href="world/factionindex.html">Faction Index</a>
        <a href="docs/timeline.html">Timeline</a>
        <a href="docs/races.html">Races and Species</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">Badlands
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="locations/TexasBadlands.html">Texas Badlands</a>
      </div>
    </div>
  </span>

</nav>`;
var el = document.getElementById("navcontainer");
el.insertAdjacentHTML('afterbegin', navbar);

// Adds Button Pannel to pages at root.

var buttons = `<button type="button" name="button" class="redglow" onclick="location.href='locations/TexasBadlands.html';"></button><span class=buttontext>Database</span>
</br>
<button type="button" name="button" class="redglow" onclick="location.href='utilities/CrawlMapViewer.html';"></button><span class=buttontext>Area Map</span>
</br>
<button type="button" name="button" class="redglow" onclick="location.href='utilities/BadlandsMapInteractive.html';"></button><span class=buttontext>Region Map</span>
</br>
<button type="button" name="button" class="redglow" onclick="location.href='utilities/noteadv.html';"></button><span class=buttontext>Notes</span>`;
var el1 = document.getElementById("buttonpannel");
el1.insertAdjacentHTML('afterbegin', buttons);

window.onload = function() {
  var figures = document.getElementsByTagName('figure');
  for (var i = 0; i < figures.length; i++) {
    var img = figures[i].getElementsByTagName('img')[0];
    img.addEventListener('click', function() {
      window.open(this.src, '_blank');
    });
  }
}
