let pilha = [];

function atualizarPilha() {
    const pilhaContainer = document.getElementById("meuArray");
    pilhaContainer.innerHTML = pilha.map(item => `<div class="text-white">${item}</div>`).join('');
}

function push() {
    const elemento = document.getElementById("elemento").value;
    if (elemento) {
        pilha.push(elemento);
        atualizarPilha();
        document.getElementById("elemento").value = "";
    } else {
        alert("Digite um valor para adicionar à pilha!");
    }
}

function pop() {
    if (pilha.length > 0) {
        pilha.pop();
        atualizarPilha();
    } else {
        alert("A pilha está vazia!");
    }
}

function peek() {
    if (pilha.length > 0) {
        alert(`O topo da pilha é: ${pilha[pilha.length - 1]}`);
    } else {
        alert("A pilha está vazia!");
    }
}

function size() {
    alert(`O tamanho da pilha é: ${pilha.length}`);
}

function isEmpty() {
    if (pilha.length === 0) {
        alert("A pilha está vazia!");
    } else {
        alert("A pilha não está vazia.");
    }
}