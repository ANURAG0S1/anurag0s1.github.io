function Open() {
  document.querySelector("#dropdown-menu").style.transform = "scale(1)";
  document.querySelector("#toggle").setAttribute("onclick", "Close()");
}
function Close() {
  document.querySelector("#dropdown-menu").style.transform = "scale(0)";
  document.querySelector("#toggle").setAttribute("onclick", "Open()");
}
