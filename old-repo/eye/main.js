var pupil = document.querySelector("#pupil");
var pupil2 = document.querySelector("#pupil-2");
var spupil = document.querySelector("#spupil");
var spupil2 = document.querySelector("#spupil-2");


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
    pupil.style.left = (fractionX * 40 + 30) + "%";
    pupil.style.top = (fractionY * 40 + 30) + "%";
    pupil2.style.left = (fractionX * 40 + 30) + "%";
    pupil2.style.top = (fractionY * 40 + 30) + "%";
    spupil2.style.left = (fractionX * 20 + 40) + "%";
    spupil2.style.top = (fractionY * 20 + 40) + "%";
    spupil.style.left = (fractionX * 20 + 40) + "%";
    spupil.style.top = (fractionY * 20 + 40) + "%";


}
window.addEventListener('mousemove', PointerCurrent);
window.addEventListener('mousemove', resetWidth);


var fractionX = Pointer.X.current / Pointer.X.end;
