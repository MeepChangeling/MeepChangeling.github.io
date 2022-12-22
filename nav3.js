var navbar = `
    <body>
    <div class="header">
		<br>
           <p style="opacity: 0.8; margin-top: 3em; margin-bottom: 0">`
+ document.title +
    `</p>
    </div>
    <div class="navbar">
	<p class="pagetitlenav" ><b>`+ document.title +`</b></p>
    <a class="button" href="../index.html">Map</a>
	<a href="news.asp">News</a>
    <a href="contact.asp">Contact</a>
    <div class="dropdown">
        <button class="dropbtn">Index
        <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
        <a href="../races/peoples.html">Races</a>
        </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn">Tools
        <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
        <a href="../maps/regionmap.html#27.60703,0.0161,4.68z">Atlas Map</a>
		<a href="../maps/scholarsmap.html#25.21476,0.0161,4.68z">Scholar's Map</a>
		<a href="../languages/langindex.html">Languages</a>
        <a href="../dungeongen.html">Dungeon Generator</a>
        <a href="../scripts/yadrol-master/index.html">MIT Dice Roller</a>
        <a href="../scripts/car-sheet/index.html">PF1E Character Sheet</a>
        </div>
		</div>
	<div class="dropdown">
		<button class="dropbtn">Beastiary
		<i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
		<a href="../beastiaryALPHA.html">Monsters by Name</a>
		<a href="../beastiaryCR.html">Monsters by Chalange Level</a>
		<a href="../beastiaryTYPE.html">Monsters by Type</a>
		<a href="../beastiaryENVIRO.html">Monsters by Habitat</a>
	</div>
    </div>
    </div>`;


// inserting navbar in beginning of body
document.body.insertAdjacentHTML("afterbegin", navbar);
