var navbar = `
    <body>
    <div class="header">
    <header>
    <h1 class="goldtext">Eyom Digital Encylopedia</h1>
        <h2 class="goldtext">`
+ document.title +
    `</h2>
    </header>
    </div>
      <div id="navbar" class="navbar">
    <nav>
	<p class="pagetitlenav"><b>`+ document.title +`</b></p>
  <label class="switch"><input type="checkbox" onclick="darkmodeBG();" style="float: left;"><span class="slider round"><span style="margin-left: 8px; margin-right: 6px; margin-bottom: 3px;">☽ </span> ☀</span></label>
    <a class="button" href="index.html">Map</a>
	<a href="news.asp">News</a>
    <a href="contact.asp">Contact</a>
    <div class="dropdown">
        <button class="dropbtn">Index
        <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
        <a href="races/peoples.html">Races</a>
        <a href="cultures/cultureindex.html">Cultures</a>
        <a href="languages/langindex.html">Languages</a>
        <a href="misc/miscindex.html">Index of Misc. Topics</a>
        <a href="gamerules/GameRuleMenu.html">Game Rules</a>
        </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn">Tools
        <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
        <a href="maps/regionmap.html#27.60703,0.0161,4.68">Atlas Map</a>
		<a href="maps/scholarsmap.html#25.21476,0.0161,4.68z">Scholar's Map</a>

        <a href="dungeongen.html">Dungeon Generator</a>
        <a href="scripts/yadrol-master/index.html">MIT Dice Roller</a>
        <a href="scripts/car-sheet/index.html">PF1E Character Sheet</a>
        </div>
		</div>
	<div class="dropdown">
		<button class="dropbtn">Beastiary
		<i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
		<a href="beastiaryALPHA.html">Monsters by Name</a>
		<a href="beastiaryCR.html">Monsters by Chalange Level</a>
		<a href="beastiaryTYPE.html">Monsters by Type</a>
		<a href="beastiaryENVIRO.html">Monsters by Habitat</a>
	</div>
    </div>
    </nav>
    </div>

    `;


// inserting navbar in beginning of body
document.body.insertAdjacentHTML("afterbegin", navbar);
