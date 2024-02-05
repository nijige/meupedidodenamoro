document.addEventListener("mousemove", function (e) {
    var body = document.querySelector('body');
    var mensagem = document.createElement('span');
    var x = e.clientX;
    var y = e.clientY;
    mensagem.style.left = x + 'px';
    mensagem.style.top = y + 'px';
    body.appendChild(mensagem);

    setTimeout(function () {
        mensagem.remove();
    }, 2500);
});

function animacaoCoração() {
    var coracao = document.createElement('span');
    coracao.className = 'coracao';
    coracao.innerHTML = '❤️';
    document.body.appendChild(coracao);

    var mensagemGeane = document.getElementById('mensagem');
    mensagemGeane.style.opacity = '1';

    setTimeout(function () {
        coracao.remove();
        mensagemGeane.style.opacity = '0';
        window.location.href = "https://www.youtube.com/watch?v=L0_nXyTMyqM";
    }, 1500);
}

function desvia(btn) {
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log('opa, desviei...');
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}
