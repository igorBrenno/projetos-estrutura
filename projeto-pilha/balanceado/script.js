 // Função para verificar se a expressão tem parênteses, colchetes ou chaves balanceados
 function verificarBalanceamento() {
    const expressao = document.getElementById('expressao').value;
    const pilha = [];
    const mapa = {
        '(': ')',
        '[': ']',
        '{': '}',
    };

    for (let i = 0; i < expressao.length; i++) {
        const char = expressao[i];

        if (char === '(' || char === '[' || char === '{') {
            pilha.push(char); // Adiciona à pilha
        }
        else if (char === ')' || char === ']' || char === '}') {
            if (pilha.length === 0 || mapa[pilha.pop()] !== char) {
                exibirResultado("Não Balanceado");
                return;
            }
        }
    }

    if (pilha.length > 0) {
        exibirResultado("Não Balanceado");
    } else {
        exibirResultado("Balanceado");
    }
}

function exibirResultado(resultado) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = resultado;
    if (resultado === "Balanceado") {
        resultadoElement.classList.remove('text-red-500');
        resultadoElement.classList.add('text-green-500');
    } else {
        resultadoElement.classList.remove('text-green-500');
        resultadoElement.classList.add('text-red-500');
    }
}