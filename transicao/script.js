const cartas = document.querySelectorAll(".carta-conteudo");

const botaoVirar = document.getElementById("virar");
const botaoDesvirar = document.getElementById("desvirar");

// Botão Virar
botaoVirar.addEventListener("click", function () {
    cartas.forEach(function (carta) {
        carta.classList.add("virada");
    });
});

// Botão Desvirar
botaoDesvirar.addEventListener("click", function () {
    cartas.forEach(function (carta) {
        carta.classList.remove("virada");
    });
});
