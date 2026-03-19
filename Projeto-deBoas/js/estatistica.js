
const totalMeditacoes = localStorage.getItem("meditacoes") || 0;

document.getElementById("totalMeditacoes").textContent = totalMeditacoes;

let totalTempo = Number(localStorage.getItem("tempoTotal")) || 0;

// converter para minutos e segundos
const minTotal = Math.floor(totalTempo / 60);
const segTotal = totalTempo % 60;

// exibir
document.getElementById("totalTempoMeditado").textContent = `${minTotal}:${segTotal.toString().padStart(2, "0")}`;

//-----------------------------------------------------------------------------------------------------------------------------------------------------

// Chaves que usamos no localStorage
const chaves = {
    contadorRelaxar: "Ficar Susa",
    contadorFoco: "Olha a Foca",
    contadorDormir: "Dormir de Boas"
};

// Pega os valores atuais
let valores = {};
for (const chave in chaves) {
    valores[chave] = Number(localStorage.getItem(chave)) || 0;
}

// Encontra o maior valor
let maiorValor = Math.max(...Object.values(valores));

// Encontra todas as chaves que possuem esse maior valor
let maiores = Object.keys(valores).filter(k => valores[k] === maiorValor);

// Elemento onde vamos exibir
const mensagem = document.getElementById("mensagemMaior");

if (maiores.length > 0 && maiorValor > 0) {
    // Atualiza o conteúdo do elemento com o nome
    mensagem.textContent = ` ${chaves[maiores[0]]}`;
} else {
    mensagem.textContent = "Ainda não há valores registrados.";
}