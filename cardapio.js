function adicionarItem(botao) {
    if (botao.classList.contains("Adicionado")) {
        botao.classList.remove("Adicionado");
        botao.textContent = "Adicionar";
        botao.style.backgroundColor = "#FF2E93";
    } else {
        botao.classList.add("Adicionado");
        botao.textContent = "Adicionado";
        botao.style.backgroundColor = "green";
    }
}

function mostrarDetalhes(imagem) {

    const box = imagem.parentElement;

    const detalhes = box.querySelector(".detalhes");
    const maisVendido = box.querySelector(".mais-vendido");

    if (detalhes.style.display === "block") {

        detalhes.style.display = "none";
        maisVendido.style.display = "block";

    } else {

        detalhes.style.display = "block";
        maisVendido.style.display = "none";

    }
}
