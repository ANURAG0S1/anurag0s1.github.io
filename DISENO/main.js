var person = document.querySelector("#second");
var prson = document.querySelector("#scond");



var Pointer = {
    X: {
        start: 0,
        end: window.innerWidth,
        current: 0
    },
    Y: {
        start: 0,
        end: window.innerHeight,
        current: 0
    }
}
var resetWidth = function () {
    Pointer.X.end = window.innerWidth;
    Pointer.Y.end = window.innerHeight;
}
PointerCurrent = function (e) {
    Pointer.X.current = e.clientX;
    Pointer.Y.current = e.clientY;
    var fractionX = (Pointer.X.current - Pointer.X.start) / Pointer.X.end;
    var fractionY = (Pointer.Y.current - Pointer.Y.start) / Pointer.Y.end;
    if (fractionX > 1) {
        fractionX = fractionX - 2;
    }

    if (fractionY > 1) {
        fractionY = fractionY - 2;
        pupil.style.display = "none"
    }
    console.log(fractionX + "," + fractionY)

    // person.style.transform = "translate(" + Math.floor(fractionX * 100) + "px ,0px);"

    person.style.right = "" + (fractionX * 15 + 70) + 'px';
    prson.style.left = (fractionX * 1.5 + 60) + '%';

    console.log("translate(" + Math.floor(fractionX * 100) + "px, 0px);")


}
window.addEventListener('mousemove', PointerCurrent);
window.addEventListener('mousemove', resetWidth);


var fractionX = Pointer.X.current / Pointer.X.end;
