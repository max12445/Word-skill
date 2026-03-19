// ================= ELEMENTOS =================
const audio = document.getElementById("audio");
const btn = document.getElementById("btnPlay");
const barra = document.getElementById("barra");

const tempoAtual = document.getElementById("tempoAtual");
const tempoRestante = document.getElementById("tempoRestante");
const nomeObjetivo = document.getElementById("nomeObjetivo");
const container = document.getElementById("container");

// ================= DADOS =================
const objetivo = localStorage.getItem("objetivo");
const DURACAO = 60;

// ================= CONFIGURAR OBJETIVO =================
function configurarObjetivo() {
    if (objetivo === "relaxar") {
        container.style.backgroundColor = "#60A5FA";
        nomeObjetivo.textContent = "Ficar Sussa";
    }
    else if (objetivo === "foco") {
        container.style.backgroundColor = "#F87171";
        nomeObjetivo.textContent = "Olha a Foca";
    }
    else if (objetivo === "dormir") {
        container.style.backgroundColor = "#A78BFA";
        nomeObjetivo.textContent = "Dormir de Boas";
    }
}

// ================= CONFIGURAR MÚSICA =================
function configurarMusica() {
    audio.src = "musica/meditacao.mp3";
}

// ================= CONTROLE PLAY / PAUSE =================
function alternarPlayPause() {

    // se terminou, volta pro início
    if (audio.currentTime >= 60) {
        audio.currentTime = 0;
        barra.style.width = "0%";
    }

    if (audio.paused) {
        audio.play();
        btn.src = "img/pause.png";
    } else {
        audio.pause();
        btn.src = "img/play.png";
    }
}

btn.addEventListener("click", alternarPlayPause);

// ================= ATUALIZAR TEMPO E BARRA =================
function atualizarTempo() {
    const tempo = Math.floor(audio.currentTime);

    // barra de progresso
    const progresso = (tempo / DURACAO) * 100;
    barra.style.width = progresso + "%";

    // tempo atual
    tempoAtual.textContent = `0:${tempo.toString().padStart(2, "0")}`;

    // tempo restante
    const restante = DURACAO - tempo;
    tempoRestante.textContent = `0:${restante.toString().padStart(2, "0")}`;

    if (audio.currentTime >= 60) {
        audio.currentTime = 0;
        barra.style.width = "0%";
        //localSotreg
        let totalMeditacoes = Number(localStorage.getItem("meditacoes")) || 0;
        totalMeditacoes++;
        localStorage.setItem("meditacoes", totalMeditacoes);
    }

    // terminou
    if (tempo >= DURACAO) {
        finalizarMeditacao();
        audio.pause();
        btn.src = "img/play.png";
    }
}

audio.addEventListener("timeupdate", atualizarTempo);

// ================= SALVAR ESTATÍSTICAS =================
function finalizarMeditacao() {

     // sessões
    // let totalMeditacoes = Number(localStorage.getItem("meditacoes")) || 0;
    // totalMeditacoes++;
    // localStorage.setItem("meditacoes", totalMeditacoes);

    // tempo total
    let tempoTotal = Number(localStorage.getItem("tempoTotal")) || 0;
    tempoTotal += DURACAO;
    localStorage.setItem("tempoTotal", tempoTotal);

    // objetivos
    let dados = JSON.parse(localStorage.getItem("objetivos")) || {
        relaxar: 0,
        foco: 0,
        dormir: 0
    };

    dados[objetivo]++;
    localStorage.setItem("objetivos", JSON.stringify(dados));
}

// ================= INICIAR =================
configurarObjetivo();
configurarMusica();



const imgMusica = document.getElementById("imgMusica");

// RELAXAR (horizontal)
if (objetivo === "relaxar") {
    imgMusica.src = "img/cego.png";

    let pos = 0;
    let dir = 1;

    setInterval(() => {
        pos += 1.5 * dir;

        if (pos > 50) dir = -1;
        if (pos < -50) dir = 1;

        imgMusica.style.transform = `translateX(${pos}px)`;
    }, 20);
}

// FOCO (vertical)
else if (objetivo === "foco") {
    imgMusica.src = "img/bravo.png";

    let pos = 0;
    let dir = 1;

    setInterval(() => {
        pos += 2 * dir;

        if (pos > 50) dir = -1;
        if (pos < -50) dir = 1;

        imgMusica.style.transform = `translateY(${pos}px)`;
    }, 20);
}

// DORMIR (diagonal)
else if (objetivo === "dormir") {
    imgMusica.src = "img/sono.png";

    let x = 0;
    let y = 0;
    let dx = -1;
    let dy = 1;

    setInterval(() => {
        x += 2 * dx;
        y += 2 * dy;

        if (x >= 50 || x <= -50) dx *= -1;
        if (y >= 50 || y <= -50) dy *= -1;

        imgMusica.style.transform = `translate(${x}px, ${y}px)`;
    }, 20);
}

audio.addEventListener("timeupdate", () => {
    const segundosAtual = Math.floor(audio.currentTime);

    // Soma ao tempo total apenas se passou 1 segundo
    if (segundosAtual > ultimoTempo) {
        tempoTotal += segundosAtual - ultimoTempo;
        ultimoTempo = segundosAtual;
        localStorage.setItem("tempoTotal", tempoTotal);
        exibirTempoAssistido();
    }
});