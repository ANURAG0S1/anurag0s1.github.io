var taret = document.querySelector("#navbar");
var open = document.querySelector("#span1");
var close = document.querySelector("#span2");
var bg = document.querySelector("#bg-menu");
var social = document.querySelector('#social');
var so = document.querySelector("#soc-1")
var sc = document.querySelector("#soc-2")
function socialo() {
    social.style.transform = "scale(1)";
    so.style.display = "none";
    sc.style.display = "block";
}
function socialc() {
    social.style.transform = "scale(0)";
    so.style.display = "block";
    sc.style.display = "none";
}
function openalert() {
    taret.style.overflow = "visible";
    close.style.display = "inline-block";
    open.style.display = "none";
    bg.style.transform = " translate(-50%, -40%) scale(1)";
}
function closealert() {
    taret.style.overflow = "hidden";
    open.style.display = "inline-block";
    close.style.display = "none";
    bg.style.transform = " translate(-50%, -40%) scale(0)";
}

var typed = new Typed("#typed", {
    strings: [
        "Hello, Bonjour, नमस्ते !",
        "I am Anurag kush ",
        "I am a Passionate Coder!",
        "I am a photographer!",
        "I am an enthusiastic Techie!",
        "Welcome To My page!",
        "Checkout My Blog!",
        "Checkout My Projects!",
        "Thanks for visiting my page!",
    ],
    backSpeed: 25,
    smartBackspace: true,
    backDelay: 1500,
    startDelay: 1000,
    typeSpeed: 15,
    loop: true,
});
var bakra = document.querySelector("#mainn");
var weapon = document.querySelector("#ham");
var target = document.querySelector("#inpu");

function showe() {
    weapon.style.display = "none";
    target.style.display = "block";
    bakra.style.display = "block";
}
function hidee() {
    weapon.style.display = "block";
    bakra.style.display = "none";
    target.style.display = "none";
}