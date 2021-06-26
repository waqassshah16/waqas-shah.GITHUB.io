
function clearScreen() {
  document.getElementById("result").value = "";
}

function liveScreen(value) {
  var res = document.getElementById("result");
  if(res.value == "undefined"){
    res.value = "";
  }
  res.value += value;
}
