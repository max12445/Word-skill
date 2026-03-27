// Meditações realizadas
function atualizarTela() {
    document.getElementById("MeditacoesRealizadas").textContent = Number(localStorage.getItem("qntMeditacoes"));
    document.getElementById("TempoMeditado").textContent = Number(localStorage.getItem("tempo")) + " min";
}
// Tempo Meditado
// OBjetivo mais utilizado