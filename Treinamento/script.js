
let valor = document.getElementById("valor")

let aumentar = document.getElementById("aumentar");
let diminuir = document.getElementById("diminuir");
let resetar = document.getElementById("resetar");
let status = document.getElementById("status");

let qntClick = Number(localStorage.getItem("click")) || 0;

valor.textContent = qntClick;

aumentar.addEventListener("click", () => {
    if( qntClick < 10){
        qntClick++;
    }

    localStorage.setItem("click", qntClick);



    valor.textContent = qntClick;

    if (qntClick === 10) {
    status.textContent = "Limite atingido!";
}
else if (qntClick < 0){
 status.textContent = "Limite foi Quebrado!";
} else {
    status.textContent = "Contador funcionando";
}

});

diminuir.addEventListener("click", () => {

    if(qntClick > 0){
        qntClick --;
    }
    
    localStorage.setItem("click", qntClick);

    valor.textContent = qntClick;
})

resetar.addEventListener("click", () => {
    qntClick = 0;

    localStorage.setItem("click", qntClick);



    valor.textContent = qntClick;
})

