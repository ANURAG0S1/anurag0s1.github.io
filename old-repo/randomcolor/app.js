function randome() {
  var node = document.createElement("LI");
  node.className = "coll";
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  Bicolor = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.backgroundColor = Bicolor;

  document.querySelector("#code").innerHTML = Bicolor;
  node.textContent = Bicolor;
  node.style.border = "2px solid white";
  node.style.backgroundColor = node.textContent;
  node.addEventListener("click", function () {
    document.body.style.backgroundColor = node.textContent;
    // document.querySelector("#ite").style.backgroundColor = node.textContent;
    document.querySelector("#code").innerHTML = node.textContent;
  });

  document.querySelector("#ite").appendChild(node);
}
function ho() {
  document.querySelector("#h-list").style.display = "block";
  document.querySelector("#history").setAttribute("onclick", "hc()");
}
function hc() {
  document.querySelector("#history").setAttribute("onclick", "ho()");
  document.querySelector("#h-list").style.display = "none";
}
