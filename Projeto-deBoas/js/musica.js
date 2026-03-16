

const audio = document.querySelector("#tempoTocado audio");
const tempoTexto = document.getElementById("tempoMinutos");

// sempre que o tempo do áudio mudar
audio.addEventListener("timeupdate", () => {

    let tempo = audio.currentTime; // tempo em segundos
    
    // salvar no navegador
    localStorage.setItem("tempoAudio", tempo);

    // converter para minutos
    let minutos = Math.floor(tempo / 60);
    let segundos = Math.floor(tempo % 60);

    tempoTexto.textContent = `Tempo escutado: ${minutos}m ${segundos}s`;
});

// quando a página abrir
window.addEventListener("load", () => {

    let tempoSalvo = localStorage.getItem("tempoAudio");

    if(tempoSalvo){
        audio.currentTime = tempoSalvo;
    }

});