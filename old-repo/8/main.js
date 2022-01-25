var weapon = document.querySelector("#open")
var bakra = document.querySelector("#menu")

function opene() {
    bakra.style.display = "block";

    weapon.setAttribute('onclick', ("closee()"))
}

function closee() {
    bakra.style.display = "none";

    weapon.setAttribute('onclick', ("opene()"))
}