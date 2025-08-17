alert ("Bem vindo amigo!");
let amigos = [];

let sorteados = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "" || !isNaN(nome)) {
        alert("Por favor, insira um nome válido.");
        return;
    }

    amigos.push(nome);
    atualizaLista();

    input.value = "";

}

function atualizaLista() {
    const lista =  document.getElementById("listaAmigos");
    (lista.innerHTML = "");
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo + (index < amigos.length - 1 ? "," : "");
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos esta vazia.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceSorteado];

    sorteados.push(amigoSorteado);

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "O seu amigo secreto sorteado foi: " + sorteados;

    sorteados = [];
    atualizaLista();
    lista.innerHTML = "";
}

