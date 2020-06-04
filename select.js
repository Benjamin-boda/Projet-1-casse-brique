let persoElt = document.getElementById("perso");
let fondElt = document.getElementById("fond");

let persos = [
    {
        name : "vaisseau 1",
        link : "img/vaisseau.png"
    },
    {
        name : "vaisseau 2",
        link : "img/vaisseau2.png"
    },
    {
        name : "vaisseau 3",
        link : "img/vaisseau3.png"
    }
];

persos.forEach ( function(perso) {
    let imgPerso = document.createElement("img");
    imgPerso.src = perso.link;
    imgPerso.title = perso.name;
    imgPerso.style.border = "solid 1px";
    imgPerso.style.width = "50px";
    imgPerso.style.position = "relative";
    imgPerso.style.padding = "10px";
    imgPerso.style.bottom = parseInt(cadreElt.style.height) * -31/30 + "px";

    imgPerso.addEventListener("click", function(e) {
        imgElt.src = e.target.src;
    })
    persoElt.appendChild(imgPerso);
})

let fonds = [
    {
        name : "skyfall",
        link : "img/skywall.jpeg"
    },
    {
        name : "fond2",
        link : "img/fond2.jpg"
    },
    {
        name : "fond3",
        link : "img/fond3.png"
    }
];

fonds.forEach ( function(fond) {
    let imgFond = document.createElement("img");
    imgFond.src = fond.link;
    imgFond.title = fond.name;
    imgFond.style.border = "solid 1px";
    imgFond.style.width = "50px";
    imgFond.style.position = "relative";
    imgFond.style.padding = "10px";
    
    imgFond.style.left = parseInt(cadreElt.style.width) + parseInt(imgFond.style.padding) + "px";

    imgFond.addEventListener("click", function(e) {
        cadreElt.style.backgroundImage = "url(" + e.target.src + ")";
    })
    fondElt.appendChild(imgFond);
})