const foguete = document.getElementById("foguete")
const imagemFoguete = document.querySelector("#foguete > figure > img")

let fogueteTop = 200;
let fogueteLeft = 200;


function mover(keyName){
    if(keyName === "w" || keyName ==="ArrowUp"){
    foguete.style.top = fogueteTop - 10+ "px";
    fogueteTop -= 10;
    imagemFoguete.setAttribute("class", "cima");

    }
    if(keyName === "s" || keyName ==="ArrowDown"){
        foguete.style.top = fogueteTop + 10+ "px";
        fogueteTop += 10;
        imagemFoguete.setAttribute("class", "baixo");

        }
    if(keyName === "a" || keyName ==="ArrowLeft"){
        foguete.style.left = fogueteLeft - 10+ "px";
        fogueteLeft -= 10;
        imagemFoguete.setAttribute("class", "esquerda");

        }
    if(keyName === "d" || keyName ==="ArrowRight"){
        foguete.style.left = fogueteLeft + 10+ "px";
        fogueteLeft += 10;
        imagemFoguete.setAttribute("class", "direita");
        }
}


'use strict';
        
document.addEventListener('keydown', (event) => {
    const keyName = event.key;

  mover(keyName);
  console.log('keydown event\n\n' + 'key: ' + keyName);

});
