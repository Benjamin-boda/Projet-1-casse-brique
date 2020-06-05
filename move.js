let bodyElt = document.querySelector("body");

let cadreElt = document.getElementById("cadre");
cadreElt.style.position = "absolute";
cadreElt.style.height = "450px";
cadreElt.style.width = "1024px"
cadreElt.style.border = "solid 1px"
cadreElt.style.backgroundImage = "url(img/skywall.jpeg)";
cadreElt.style.backgroundSize = parseInt(cadreElt.style.width) + "px";

let blocElt = document.getElementById("bloc");

let imgElt = document.querySelector("img");
imgElt.style.height = "50px";
imgElt.style.width = "50px";
imgElt.style.position = "relative";
imgElt.style.left = (parseInt(cadreElt.style.width) - parseInt(imgElt.style.width))/2 + "px";
imgElt.style.bottom = (parseInt(cadreElt.style.height) / 4) * -3 + "px";


function moveLeft() {
    if (parseInt(imgElt.style.left) <= 0) {
        imgElt.style.left = parseInt(imgElt.style.left) -0 + "px";
    } else {
        imgElt.style.left = parseInt(imgElt.style.left) -5 + "px";
        imgElt.style.transform = "rotate(270deg)";
    }
}

function moveRight() {
    if (parseInt(imgElt.style.left) >= parseInt(cadreElt.style.width) - parseInt(imgElt.style.width)) {
        imgElt.style.left = parseInt(imgElt.style.left) -0 + "px";
    } else {
        imgElt.style.left = parseInt(imgElt.style.left) +5 + "px";
        imgElt.style.transform = "rotate(90deg)";
    }
}

function moveUp() {
    if (parseInt(imgElt.style.bottom) >= 0) {
        imgElt.style.bottom = parseInt(imgElt.style.bottom) -0 + "px";
    } else {
        imgElt.style.bottom = parseInt(imgElt.style.bottom) +5 + "px";
        imgElt.style.transform = "rotate(0deg)";
    }  
}

function moveDown() {
    if (parseInt(imgElt.style.bottom) <= -parseInt(cadreElt.style.height) + parseInt(imgElt.style.height)) {
        imgElt.style.bottom = parseInt(imgElt.style.bottom) -0 + "px";
    } else {
        imgElt.style.bottom = parseInt(imgElt.style.bottom) -5 + "px";
        imgElt.style.transform = "rotate(180deg)";
    } 
}

let keys = {
    gauche : false,
    droite : false,
    top : false,
    descend : false
}

function toucheAppuye(eKeyCode) {
    if (keys.gauche) {
        moveLeft(); 
    } else if (keys.droite) {
        moveRight();
    } else if (keys.top) {
        moveUp();
    } else if (keys.descend) {
        moveDown();
    }
}

bodyElt.addEventListener("keydown", function (e) {
    let touche = e.which || e.keyCode
    switch (touche) {
        case 37:
            keys.gauche = true;
            console.log("gauche");
            break
        case 38:
            keys.top = true;
            console.log("haut");
            break    
        case 39:
            keys.droite = true;
            console.log("droite");
            break
        case 40:
            keys.descend = true;
            console.log("bas");
            break
        default :
            console.log("Touche " + touche + " non gérée");
    }
})

bodyElt.addEventListener("keyup" , function(e) {
    if (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40 ) {
        keys.gauche = false;
        keys.droite = false;
        keys.top = false;
        keys.descend = false;
    }
})

setInterval(toucheAppuye, 1000/60);





