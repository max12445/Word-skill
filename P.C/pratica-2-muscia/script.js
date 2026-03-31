// PROGRESSÂO DA MUSICA

let tempoAumentando = document.getElementById("tempoAumentando");
let tempoAbaixando = document.getElementById("tempoAbaixando");
let barra = document.getElementById("barra");

let btnPlay = document.getElementById("btnPlay");
let iconePlay = document.getElementById("iconePlay");

let musica = document.getElementById("musica");

let tocando = false;

let qntVezesMeditadas = Number(localStorage.getItem("qntMeditacoes")) || 0;

let totalMeditacoes = document.getElementById("totalMeditacoes");

totalMeditacoes.textContent = qntVezesMeditadas;

let porgressao = 0;
let tempoTotal = 0;
let intervalo;
let tempoDeMusica = 60;

function formatarTempo(t) {
    let min = Math.floor(t / 60);
    let seg = t % 60;
    if (seg < 10) seg = "0" + seg;
    return `${min}:${seg}`;
}
btnPlay.addEventListener("click", () => {

    if (tocando) {
        iconePlay.src = "img/play.png";

        btnPlay.classList.remove("bg-green-600");
        btnPlay.classList.add("bg-red-600");

        musica.pause();

        clearInterval(intervalo);
    } else {
        iconePlay.src = "img/pause.png";

        btnPlay.classList.remove("bg-red-600");
        btnPlay.classList.add("bg-green-600");

        musica.play();

        intervalo = setInterval(() => {
            porgressao += (100 / tempoDeMusica);
            barra.style.width = porgressao + "%";

            tempoEscutado = Number(localStorage.getItem("tempo")) || 0;

            tempoEscutado++;

            tempoTotal++;

            localStorage.setItem("tempo", tempoEscutado)

            let restante = tempoDeMusica - tempoTotal

            tempoAumentando.textContent = formatarTempo(tempoTotal);
            tempoAbaixando.textContent = formatarTempo(restante);

            if (porgressao >= 100) {
                qntVezesMeditadas += 1;

                porgressao = 0;
                tempoTotal = 0;

                localStorage.setItem("qntMeditacoes", qntVezesMeditadas)
                clearInterval(intervalo);

                btnPlay.classList.remove("bg-green-600");
                btnPlay.classList.add("bg-red-600");

                musica.play();
                totalMeditacoes.textContent = qntVezesMeditadas;

            }
        },1000)

    }
   tocando = !tocando;
} )