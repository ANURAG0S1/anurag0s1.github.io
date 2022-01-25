function show() {
  var C1 = document.querySelector("#rone").value;
  var C2 = document.querySelector("#gone").value;
  var C3 = document.querySelector("#bone").value;
  var D1 = document.querySelector("#rtwo").value;
  var D2 = document.querySelector("#gtwo").value;
  var D3 = document.querySelector("#btwo").value;
  var deeg = document.querySelector("#angle").value;

  var col =
    `linear-gradient( ` +
    deeg +
    `deg ,rgb(` +
    C1 +
    `,` +
    C2 +
    `,` +
    C3 +
    `),rgb(` +
    D1 +
    `,` +
    D2 +
    `,` +
    D3 +
    `))`;
  document.querySelector("#showbox").style.background = col;
  document.querySelector("#output").innerHTML = col;
}
