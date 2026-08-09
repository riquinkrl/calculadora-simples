import { getVisor, limparTudo, inserirNumero, definirOperacao, calcular } from './calculadora';

// Pega o elemento do visor, onde o número aparece na tela
let visor = document.getElementById('resultado');

// Atualiza o texto do visor com o valor atual da calculadora
function atualizarVisor(): void {
    if (visor !== null) {
        visor.textContent = getVisor();
    }
}

// Pega o botão AC e escuta o clique
let botaoAc = document.querySelector('.btn-ac');
if (botaoAc !== null) {
    botaoAc.addEventListener('click', function () {
        limparTudo();
        atualizarVisor();
    });
}

// Pega todos os botões de operação (+, -, *, /, =) e escuta os cliques
let botoesOperacao = document.querySelectorAll('.btn-op');
botoesOperacao.forEach(function (botao) {
    botao.addEventListener('click', function () {
        let texto = botao.textContent;

        if (texto === '=') {
            calcular();
        } else if (texto !== null) {
            definirOperacao(texto);
        }

        atualizarVisor();
    });
});

// Pega todos os botões da calculadora
let todosBotoes = document.querySelectorAll('button');

todosBotoes.forEach(function (botao) {
    let ehAc = botao.classList.contains('btn-ac');
    let ehOperacao = botao.classList.contains('btn-op');

    // Se não for AC nem operação, então é número ou ponto decimal
    if (!ehAc && !ehOperacao) {
        botao.addEventListener('click', function () {
            let texto = botao.textContent;
            if (texto !== null) {
                inserirNumero(texto);
                atualizarVisor();
            }
        });
    }
});

// Mostra o visor assim que a página carrega
atualizarVisor();