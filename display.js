let introElt = document.getElementById("intro");
introElt.style.backgroundImage = "url(img/banniere.png)";

introElt.style.backgroundPosition = "center center";
introElt.style.textAlign = "center";
introElt.style.color = "white";



let gameElt  = document.getElementById("game");
gameElt.style.display = "flex";
gameElt.style.justifyContent = "center"

function responsive(windowWidth) {
    if (windowWidth.matches) { 
      cadreElt.style.width = "200px";
      imgElt.style.left = (parseInt(cadreElt.style.width) - parseInt(imgElt.style.width))/2 + "px";
      imgElt.style.bottom = (parseInt(cadreElt.style.height) / 4) * -3 + "px";
    } else {
        cadreElt.style.width = "1024px";
        imgElt.style.left = (parseInt(cadreElt.style.width) - parseInt(imgElt.style.width))/2 + "px";
        imgElt.style.bottom = (parseInt(cadreElt.style.height) / 4) * -3 + "px";
    }
  }
  
let windowWidth = window.matchMedia("(max-width: 700px)")

responsive(windowWidth);

windowWidth.addListener(responsive);