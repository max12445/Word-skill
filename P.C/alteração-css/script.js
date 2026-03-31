let fundo = document.getElementById("fundo")
let bnt = document.getElementById("bnt")

let escuro = false;
bnt.addEventListener("click", () => {

    if (escuro) {
        
        fundo.classList.remove("bg-gray-600")
        fundo.classList.add("bg-blue-300")

    } else {
        fundo.classList.remove("bg-blue-300")
        fundo.classList.add("bg-gray-600")
        
    }

    escuro = !escuro;
})
