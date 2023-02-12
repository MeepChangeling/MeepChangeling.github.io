
  function darkmodeBG () {
    const toggleClass = (el, className) => el.classList.toggle(className);

    document.body.classList.toggle("darkmode");
    toggleClass(document.querySelector('div.book'), 'darkmodebook');
    toggleClass(document.querySelector('div.header'), 'darkmodeheader');
    toggleClass(document.querySelector('div.navbar'), 'darkmode');
    // document.querySelector('div.dropdown-content').forEach(e => e.classList.toggle('darkmode'));
    document.querySelectorAll('h3.articletitle').forEach(e => e.classList.toggle('darkmode'));
    document.querySelectorAll('h4.articlesubtitle').forEach(e => e.classList.toggle('darkmode'));
    document.querySelectorAll('h5.articlesubtitle').forEach(e => e.classList.toggle('darkmode'));
    document.querySelectorAll('h6.articlesubtitle').forEach(e => e.classList.toggle('darkmode'));
    }



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
