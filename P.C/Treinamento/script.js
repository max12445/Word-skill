let bravo = document.getElementById("bravo")


let posicaoInicialX = 0;
let posicaoInicialY = 0;
let direcaoX = 1;
let direcaoY = 1;

function lado() {
    posicaoInicialX += 2 * direcaoX

    if (posicaoInicialX <= -100) {
        direcaoX = 1;
    }

    if (posicaoInicialX >= 100) {
        direcaoX = -1;
    }
    posicaoInicialY += 4 * direcaoY

    if (posicaoInicialY <= -100) {
        direcaoY = 2;
    }

    if (posicaoInicialY >= 100) {
        direcaoY = -2;
    }
    bravo.style.transform = `translate(${posicaoInicialX}px, ${posicaoInicialY}px)`;
}

setInterval(lado, 30)


localStorage.setItem("idade", 1);

let idade = Number(localStorage.getItem("idade")) || 0;

function atualizarIdade() {
    idade += 2;

    localStorage.setItem("idade", idade)
    console.log(idade)

    if (idade >= 100) {
        clearInterval(intervalor);
    }
}

let intervalor = setInterval(atualizarIdade, 10)





let input = document.getElementById("input")
let bnt = document.getElementById("bnt")

bnt.addEventListener("click", () => {
    alert("batata")

    let valor = input.value

    localStorage.setItem("objeto", valor);

    console.log("Salvo :", valor)
});






let cutir = document.getElementById("curtir")

qntCurtidas = Number(localStorage.getItem("curtida")) || 0;

cutir.addEventListener("click", () => {


    localStorage.setItem("curtida", "qntCurtidas")

    qntCurtidas++;

    localStorage.setItem("Interacoes", curtida)

    let texto = document.getElementById("qntCurtidas").textContent
})



let resetar = document.getElementById("resetar")

resetar.addEventListener("click", () => {

    localStorage.removeItem("curtida");

})


// let cutir = document.getElementById("curtir");
// let texto = document.getElementById("qntCurtidas");

// let qntCurtidas = Number(localStorage.getItem("curtida")) || 0;
// texto.textContent = qntCurtidas;

// cutir.addEventListener("click", () => {

//     qntCurtidas++;

//     localStorage.setItem("curtida", qntCurtidas);

//     texto.textContent = qntCurtidas;
// });

// let resetar = document.getElementById("resetar");

// resetar.addEventListener("click", () => {

//     qntCurtidas = 0;
//     localStorage.setItem("curtida", 0);

//     texto.textContent = qntCurtidas;
// });