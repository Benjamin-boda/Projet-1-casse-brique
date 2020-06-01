let bodyElt = document.querySelector("body");

let cadreElt = document.getElementById("cadre");
cadreElt.style.position = "absolute";
cadreElt.style.height = "450px";
cadreElt.style.width = "850px"
cadreElt.style.border = "solid 1px"


let blocElt = document.getElementById("bloc");
blocElt.style.width = "75px"
blocElt.style.height = "15px"
blocElt.style.backgroundColor = "blue";
blocElt.style.position = "relative";
blocElt.style.left = "0px";
blocElt.style.bottom = "-425px";
blocElt.style.marginLeft = "5px";

function moveLeft() {
    if (parseInt(blocElt.style.left) <= -5) {
        blocElt.style.left = parseInt(blocElt.style.left) -0 + "px";
    } else {
        blocElt.style.left = parseInt(blocElt.style.left) -5 + "px";
    }
}

function moveRight() {
    if (parseInt(blocElt.style.left) >= 770) {
        blocElt.style.left = parseInt(blocElt.style.left) -0 + "px";
    } else {
        blocElt.style.left = parseInt(blocElt.style.left) +5 + "px";
    }
}

bodyElt.addEventListener("keydown", function (e) {
    let touche = e.which || e.keyCode
    switch (touche) {
        case 37:
            moveLeft();
            console.log("gauche");
            break
        case 39:
            moveRight();
            console.log("droite");
            break
        default :
            console.log("Touche " + touche + " non gérée");
    }
})




