function init(){
var button = document.getElementById("entrybutton");
 
function displayText(){
  var text = document.getElementById("entryinput");
  document.getElementById("textoutput").innerHTML = text.value;
  alert("Uzair says: " + text.value);
}

  button.addEventListener("click", displayText);
}

window.addEventListener('load', init);
