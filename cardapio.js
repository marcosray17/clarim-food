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