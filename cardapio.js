function adicionarItem(botao) {

    event.preventDefault();

    const mensagem = document.getElementById("mensagem");

    if (botao.classList.contains("adicionado")) {

        botao.classList.remove("adicionado");
        botao.textContent = "Adicionar";

        mensagem.textContent = " Removido do carrinho";

    } else {

        botao.classList.add("adicionado");
        botao.textContent = "✓ Adicionado";

        mensagem.textContent = " Adicionado ao carrinho";

    }

    mensagem.classList.add("show");

    setTimeout(() => {
        mensagem.classList.remove("show");
    }, 2000);
}

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
},{
    threshold: 0.15
});

reveals.forEach(reveal => {
    observer.observe(reveal);
});