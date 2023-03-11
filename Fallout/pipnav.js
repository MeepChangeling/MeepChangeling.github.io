// function change_text(){
//  document.getElementById("navtitle").innerHTML = document.title;
//}
//window.onload=change_text;

var navbar = `<nav>
  <span class="navtitle" id="navtitle">` + document.title + `</span>
  <div class="dropdown">
    <button class="dropbtn">World
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="world/worldindex.html">World Index</a>
      <a href="world/regionindex.html">Region Index</a>
      <a href="world/factionindex.html">Faction Index</a>
    </div>
  </div>
  <div class="dropdown">
    <button class="dropbtn">Badlands
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="locations/texplexbadlands.html">Texaplex Badlands</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>

</nav>`;
var el = document.getElementById("navcontainer");
el.insertAdjacentHTML('afterbegin', navbar);
