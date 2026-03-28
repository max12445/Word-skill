// MEDITAÇÕES REALIZADAS
let meditacoes = Number(localStorage.getItem("qntMeditacoes")) || 0;
document.getElementById("MeditacoesRealizadas").textContent = meditacoes;


// TEMPO TOTAL (em segundos)
let tempo = Number(localStorage.getItem("tempo")) || 0;

// converter pra minutos e segundos
let minutos = Math.floor(tempo / 60);
let segundos = tempo % 60;

// deixar bonitinho (ex: 5:03)
if (segundos < 10) {
    segundos = "0" + segundos;
}

document.getElementById("tempoTotal").textContent = minutos + ":" + segundos;


// OBJETIVO MAIS UTILIZADO
let susa = Number(localStorage.getItem("susa")) || 0;
let focar = Number(localStorage.getItem("focar")) || 0;
let boas = Number(localStorage.getItem("boas")) || 0;

let maior = susa;
let nome = "Ficar Susa";

if (focar > maior) {
    maior = focar;
    nome = "Olha a Foca";
}

if (boas > maior) {
    maior = boas;
    nome = "Dormir de Boas";
}
document.getElementById("ObjetivoMaisRealizado").textContent = nome;