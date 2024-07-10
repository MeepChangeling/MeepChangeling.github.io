var navbar = `
    <div id="navbar" class="navbar">
        <img class="dbicon" src="../img/dbicon.webp"></img>
	     <h1 class="pagetitlenav"><b>USER Database</b></h1>
        <a class="button" href="../index.html">Index</a>
        <a class="button" href="../index.html">Map</a>
        <a class="button" href="../index.html">somthing</a>
    </div>
    <p></p>`;

// inserting navbar in beginning of body
document.addEventListener('DOMContentLoaded', (event) => {
    // ... your navbar variable and the rest of your code ...
    document.body.insertAdjacentHTML("afterbegin", navbar);
});

document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.addEventListener('mousemove', function(e) {
      const x = e.pageX - this.offsetLeft;
      const y = e.pageY - this.offsetTop;
      const backgroundStyle = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 190, 190, 1) 0.1%, transparent 17.5%)`;
      this.style.background = backgroundStyle;
    });

    // Reset the background to transparent when the mouse leaves the navbar
    navbar.addEventListener('mouseleave', function() {
      this.style.background = 'transparent';
    });
  }
});
