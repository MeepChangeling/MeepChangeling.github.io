
  function darkmodeBG () {
    var el = document.getElementById("theme");
    if (el.href.match("../MainStyleSheet.css")) {
        el.href = "../DarkStyleSheet.css";
        localStorage.setItem('theme', 'dark') : localStorage.removeItem('theme');
        document.documentElement.classList.add('dark');
    }
    else {
        el.href = "../MainStyleSheet.css";
        preference !== "light" ? localStorage.setItem('theme', 'light') : localStorage.removeItem('theme');
    }

    }

    const preference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    if (localStorage.getItem('theme') === "dark" || (!('theme' in localStorage) && preference === 'dark')) {
        setDarkMode(true, preference);


window.onload = function(){
   var checkboxes = document.getElementsByTagName("INPUT");

   for(var x=0; x<checkboxes.length; x++)
   {
      if(checkboxes[x].type == "checkbox")
      {
          checkboxes[x].checked = false;
      }
   }

}
