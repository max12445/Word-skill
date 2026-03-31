let tempoAumentando = document.getElementById("tempoAumentando");
let tempoAbaixando = document.getElementById("tempoAbaixando");
let barra = document.getElementById("barra");
let btnPlay = document.getElementById("btnPlay");
let iconePlay = document.getElementById("iconePlay");

let totalMeditacoesElemento = document.getElementById("totalMeditacoes");

let musica = document.getElementById("musica");

let tocando = false;
let progresso = 0;
let intervalo;

let TempoReal = 0;

// pega valor salvo
let vezesTotaisMeditadas = Number(localStorage.getItem("qntMeditacoes")) || 0;

// mostra na tela ao abrir
totalMeditacoesElemento.textContent = vezesTotaisMeditadas;

// função fora do loop (melhor prática)
function formatarTempo(t) {
    let min = Math.floor(t / 60);
    let seg = t % 60;
    if (seg < 10) seg = "0" + seg;
    return `${min}:${seg}`;
}

btnPlay.addEventListener("click", () => {

    if (tocando) {
        // ⏸️ PAUSE
        musica.pause();
        iconePlay.src = "img/play.png";
        btnPlay.classList.remove("bg-green-500");
        btnPlay.classList.add("bg-red-500");
        clearInterval(intervalo);

    } else {
        // ▶️ PLAY
        musica.play();
        iconePlay.src = "img/pause.png";
        btnPlay.classList.remove("bg-red-500");
        btnPlay.classList.add("bg-green-500");

        intervalo = setInterval(() => {

            progresso += (100 / 60);
            barra.style.width = progresso + "%";

            let tempoSalvo = Number(localStorage.getItem("tempo")) || 0;
            tempoSalvo += 1;
            TempoReal += 1;

            localStorage.setItem("tempo", tempoSalvo);

            let tempoAtual = TempoReal;
            let tempoTotal = 60;
            let restante = tempoTotal - tempoAtual;

            tempoAumentando.textContent = formatarTempo(tempoAtual);
            tempoAbaixando.textContent = formatarTempo(restante);

            if (progresso >= 100) {

                // incrementa corretamente
                vezesTotaisMeditadas += 1;

                // salva corretamente
                localStorage.setItem("qntMeditacoes", vezesTotaisMeditadas);

                // atualiza na tela
                totalMeditacoesElemento.textContent = vezesTotaisMeditadas;

                clearInterval(intervalo);
                musica.pause();

                // reset (importante)
                progresso = 0;
                TempoReal = 0;
                barra.style.width = "0%";

                // opcional:
                // window.location.href = "objetivo.html";
            }

        }, 1000);
    }

    tocando = !tocando;
});