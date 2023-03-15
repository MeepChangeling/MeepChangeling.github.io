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
      <a href="../world/worldindex.html">World Index</a>
      <a href="../world/regionindex.html">Region Index</a>
      <a href="../world/factionindex.html">Faction Index</a>
      <a href="../docs/timeline.html">Timeline</a>
    </div>
  </div>
  <div class="dropdown">
    <button class="dropbtn">Badlands
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="locations/TexasBadlands.html">Texas Badlands</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>

</nav>`;
var el = document.getElementById("navcontainer");
el.insertAdjacentHTML('afterbegin', navbar);

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
