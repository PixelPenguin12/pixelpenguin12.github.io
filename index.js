let txt = document.getElementById("Text");

let i = 0;
function change() {
  txt.innerHTML = i;
  i++;
}
setInterval(100, change)
