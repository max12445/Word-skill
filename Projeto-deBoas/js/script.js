
let cego = document.getElementById("cego") 
// declara a posicao inicial
let posicaoCego = 0
// a direção para onde ela vai
let direcaoCego = 1   // 1 = direita(positivo) | -1 = esquerda(negativo)

function cima(){
    // posicaoCego = posicaoCego + (1.5 * direcaoCego)
    posicaoCego += 1.5 * direcaoCego
    if(posicaoCego > 50){
        direcaoCego = -1
    }
    if(posicaoCego < -50){
        direcaoCego = 1
    }
    cego.style.transform = `translateX(${posicaoCego}px)`
}

setInterval(cima, 20)


// BRAVOOOOOOO

let bravo = document.getElementById("bravo")

let posicaoBravo = 0
let direcaoBravo = 1

function lado(){
    posicaoBravo += 2 * direcaoBravo
    if(posicaoBravo > 50){
        direcaoBravo = -1
    }
    if(posicaoBravo < -50){
        direcaoBravo = 1
    }
    bravo.style.transform = `translateY(${posicaoBravo}px)`
}
setInterval(lado, 20)

// DORMINDOOOOOOOOO

let dormir = document.getElementById("dormir")

let posicaoX = 0
let posicaoY = 0
let direcaoX = -1
let direcaoY = 1
function meiaLua(){
posicaoX += 2 * direcaoX
posicaoY += 2 * direcaoY
if(posicaoX <= -50){
    direcaoX = 1
    // vai continuar ate o 0
}
if(posicaoY >= 50){
    direcaoY = -1
}

if(posicaoX >= 50){
    direcaoX = -1
    // vai continuar ate o 0
}
if(posicaoY <= -50){
    direcaoY = 1
}
dormir.style.transform = `translate(${posicaoX}px, ${posicaoY}px)`
}
setInterval(meiaLua, 20)
