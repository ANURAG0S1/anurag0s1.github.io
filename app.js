var bakra = document.querySelector("#mainn");
var weapon = document.querySelector("#ham");
var target = document.querySelector("#inpu");
var methood = document.querySelector(".search-icon");
var methoed = document.querySelector(".search-icone");
function showe() {
  weapon.style.display = "none";

  bakra.style.display = "block";
}
function hidee() {
  weapon.style.display = "block";
  bakra.style.display = "none";
}
document.querySelectorAll("li").addEventListener("onmouseover", function () {
  this.innerHTML.toUpperCase();
});
function hidie() {
  methood.style.display = "block";
  methoed.style.display = "none";
  target.style.display = "none";
}
function inp() {
  target.style.display = "block";
  methood.style.display = "none";
  methoed.style.display = "block";
}
function pr() {
  document.querySelector("#img").style.filter = "blur(14px)";
  document.querySelector(".full-screen").style.filter = "blur(4px)";
  document.querySelector("#menu-scr").style.transform = "scale(1)";
  document.querySelector(".skil").setAttribute("onclick", "rp()");
}
function rp() {
  document.querySelector("#img").style.filter = "blur(0px)";
  document.querySelector(".full-screen").style.filter = "blur(0px)";
  document.querySelector("#menu-scr").style.transform = "scale(0)";
  document.querySelector(".skil").setAttribute("onclick", "pr()");
}
