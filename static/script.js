//auto-changes value from slider

// mapping  /led/0-23
// /light
// /shutdown /restart /ir
 
function direct(x) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("datadisplay").innerHTML = this.responseText;
    console.log(this.responseText);
  }
};
xhttp.open("GET", x, true);
xhttp.send();
}






  

   





  

   
