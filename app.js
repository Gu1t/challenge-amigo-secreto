let amigos = [];
let sorteioRealizado = false;

// Função para adicionar amigo
function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    // limpa tudo antes de adicionar novos nomes
    if (sorteioRealizado) {
        amigos = [];
        document.getElementById('listaAmigos').innerHTML = '';
        document.getElementById('resultado').innerHTML = '';
        sorteioRealizado = false;
    }

    if (!nome) {
        alert('Por favor, insira um nome válido.');
        return;
    }

    amigos.push(nome);
    input.value = '';
    atualizarLista();
}

// Função para atualizar a lista na tela
function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 1) {
        alert('Adicione pelo menos um amigo para sortear.');
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos[indice];

    // Exibe o resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${sorteado} foi sorteado!</li>`;

    // Marca que o sorteio foi realizado
    sorteioRealizado = true;
}