// ANIMAÇÂO MUSICA


let cego = document.getElementById("cego")
// declara a posicao inicial
let posicaoCego = 0
// a direção para onde ela vai
let direcaoCego = 1   // 1 = direita(positivo) | -1 = esquerda(negativo)

function cima() {
    // posicaoCego = posicaoCego + (1.5 * direcaoCego)
    posicaoCego += 1.5 * direcaoCego
    if (posicaoCego > 50) {
        direcaoCego = -1
    }
    if (posicaoCego < -50) {
        direcaoCego = 1
    }
    cego.style.transform = `translateX(${posicaoCego}px)`
}

setInterval(cima, 20)


// BRAVOOOOOOO

let bravo = document.getElementById("bravo")

let posicaoBravo = 0
let direcaoBravo = 1

function lado() {
    posicaoBravo += 2 * direcaoBravo
    if (posicaoBravo > 50) {
        direcaoBravo = -1
    }
    if (posicaoBravo < -50) {
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
function meiaLua() {
    posicaoX += 2 * direcaoX
    posicaoY += 2 * direcaoY
    if (posicaoX <= -50) {
        direcaoX = 1
        // vai continuar ate o 0
    }
    if (posicaoY >= 50) {
        direcaoY = -1
    }

    if (posicaoX >= 50) {
        direcaoX = -1
        // vai continuar ate o 0
    }
    if (posicaoY <= -50) {
        direcaoY = 1
    }
    dormir.style.transform = `translate(${posicaoX}px, ${posicaoY}px)`
}
setInterval(meiaLua, 20)

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



const musica = document.getElementById("musica");
const btn = document.getElementById("btnPlay");
const icone = document.getElementById("iconePlay");
const barra = document.getElementById("barra");

let tocando = false;
let progresso = 0;
let intervalo;

const tempoAumentando = document.getElementById("tempoAumentando");
const tempoAbaixando = document.getElementById("tempoAbaixando");

let TempoReal = 0;

let vezesTotaisMeditadas = Number(localStorage.getItem("qntMeditacoes")) || 0;

btn.addEventListener("click", () => {
    if (tocando) {
        // ⏸️ PAUSE
        musica.pause();
        icone.src = "img/play.png";


        btn.classList.remove("bg-green-400");
        btn.classList.add("bg-red-500");

        clearInterval(intervalo); // PARA A BARRA

    } else {
        // ▶️ PLAY
        musica.play();
        icone.src = "img/pause.png";

        btn.classList.remove("bg-red-500");
        btn.classList.add("bg-green-400");

        intervalo = setInterval(() => {
            progresso += (100 / 60);
            barra.style.width = progresso + "%";

            let tempoSalvo = Number(localStorage.getItem("tempo")) || 0;

            tempoSalvo += 1;

            TempoReal += 1;

            localStorage.setItem("tempo", tempoSalvo);
            // Tempo passando / tempo convertido

            let tempoAtual = TempoReal; // segundos
            let tempoTotal = 60;

            let restante = tempoTotal - tempoAtual;

            // formatar (mm:ss)
            function formatarTempo(t) {
                let min = Math.floor(t / 60);
                let seg = t % 60;
                if (seg < 10) seg = "0" + seg;
                return `${min}:${seg}`;
            }

            tempoAumentando.textContent = formatarTempo(tempoAtual);
            tempoAbaixando.textContent = formatarTempo(restante);

            if (progresso >= 100) {
                // Adiciona 1
                vezesTotaisMeditadas += 1;
                // Salva de volta no localStorage
                localStorage.setItem("qntMeditacoes", vezesTotaisMeditadas);
                clearInterval(intervalo);
                musica.pause();
                window.location.href = "objetivo.html";
            }
        }, 1000);
    }

    tocando = !tocando;
});




