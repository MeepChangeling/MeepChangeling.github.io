
  function darkmodeBG () {
    var el = document.getElementById("theme");
    if (el.href.match("../MainStyleSheet.css")) {
        el.href = "../DarkStyleSheet.css";
    }
    else {
        el.href = "../MainStyleSheet.css";
    }

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
