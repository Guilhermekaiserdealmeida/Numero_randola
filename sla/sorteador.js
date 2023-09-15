const numero = document.getElementById('numero')
const botaodasorte = document.getElementById('botaodasorte')

const gerarNumero  = () => {
    const constrandom = Math.floor(Math.random() * 100);

    numero.textContent = constrandom;
}

botaodasorte.addEventListener('click', gerarNumero);

gerarNumero();