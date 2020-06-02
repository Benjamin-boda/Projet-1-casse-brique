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
blocElt.style.left = (parseInt(cadreElt.style.width) - parseInt(blocElt.style.width))/2 + "px";
blocElt.style.bottom = "-425px";



function moveLeft() {
    if (parseInt(blocElt.style.left) <= 0) {
        blocElt.style.left = parseInt(blocElt.style.left) -0 + "px";
    } else {
        blocElt.style.left = parseInt(blocElt.style.left) -5 + "px";
    }
}

function moveRight() {
    if (parseInt(blocElt.style.left) >= parseInt(cadreElt.style.width) - parseInt(blocElt.style.width)) {
        blocElt.style.left = parseInt(blocElt.style.left) -0 + "px";
    } else {
        blocElt.style.left = parseInt(blocElt.style.left) +5 + "px";
    }
}

function moveUp() {
    if (parseInt(blocElt.style.bottom) >= 0) {
    blocElt.style.bottom = parseInt(blocElt.style.bottom) -0 + "px";
    } else {
        blocElt.style.bottom = parseInt(blocElt.style.bottom) +5 + "px";
    }  
}

function moveDown() {
    if (parseInt(blocElt.style.bottom) <= -parseInt(cadreElt.style.height) + parseInt(blocElt.style.height)) {
        blocElt.style.bottom = parseInt(blocElt.style.bottom) -0 + "px";
    } else {
        blocElt.style.bottom = parseInt(blocElt.style.bottom) -5 + "px";
    } 
}

bodyElt.addEventListener("keydown", function (e) {
    let touche = e.which || e.keyCode
    switch (touche) {
        case 37:
            moveLeft();
            console.log("gauche");
            break
        case 38:
            moveUp();
            console.log("haut");
            break    
        case 39:
            moveRight();
            console.log("droite");
            break
        case 40:
            moveDown();
            console.log("bas");
            break
        default :
            console.log("Touche " + touche + " non gérée");
    }
})





