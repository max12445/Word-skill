let estado = document.getElementById("State");

// cria o áudio
let audio = new Audio("musica/meditacao.mp3");

let tocando = false;
let ultimoTempo = 0;

estado.addEventListener("click", () => {
    tocando = !tocando;

    if (tocando) {
        audio.play();
        estado.src = "img/pause.png";
    } else {
        audio.pause();
        estado.src = "img/play.png";
    }
});

// conta os segundos tocados
audio.addEventListener("timeupdate", () => {
    let tempoAtual = Math.floor(audio.currentTime);

    if (tempoAtual > ultimoTempo) {
        let total = Number(localStorage.getItem("tempoMeditado")) || 0;
        total++;
        localStorage.setItem("tempoMeditado", total);

        ultimoTempo = tempoAtual;
    }
});

//////////////////////////////////////////////////////////////////////
// BARRA DE PROGRESSAO
let barra = document.getElementById("progressao");
let tempo1 = document.getElementById("tempo1");
let tempo2 = document.getElementById("tempo2");

let duracao = 60; // 1 minuto

// tempo total fixo
tempo2.innerHTML = "1:00";

audio.addEventListener("timeupdate", () => {
    let tempoAtual = Math.floor(audio.currentTime);

    if (tempoAtual <= duracao) {
        // porcentagem da barra
        let porcentagem = (tempoAtual / duracao) * 100;
        barra.style.width = porcentagem + "%";

        // converter para mm:ss
        let min = Math.floor(tempoAtual / 60);
        let seg = tempoAtual % 60;

        tempo1.innerHTML = `${min}:${seg.toString().padStart(2, "0")}`;
    }
});