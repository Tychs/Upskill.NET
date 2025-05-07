// Variáveis globais para os números e estrelas
let numerosSorte = [];
let estrelas = [];

// Função para número aleatório entre min e max (inclusive)
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para gerar números da sorte e estrelas
function gerarNumeros() {
    // Gera 5 números entre 1 e 50
    numerosSorte = [];
    while (numerosSorte.length < 5) {
        let numero = gerarNumeroAleatorio(1, 50);
        if (!numerosSorte.includes(numero)) {
            numerosSorte.push(numero);
        }
    }

    // Gera 2 números entre 1 e 9
    estrelas = [];
    while (estrelas.length < 2) {
        let estrela = gerarNumeroAleatorio(1, 9);
        if (!estrelas.includes(estrela)) {
            estrelas.push(estrela);
        }
    }

    // Mostra números da sorte
    const numerosSorteContainer = document.getElementById('numeros_sorte');
    numerosSorteContainer.innerHTML = ''; // Limpa os números antigos
    numerosSorte.forEach(numero => {
        const div = document.createElement('div');
        div.classList.add('number');
        div.textContent = numero;
        numerosSorteContainer.appendChild(div);
    });

    // Mostra estrelas
    const estrelasContainer = document.getElementById('estrelas');
    estrelasContainer.innerHTML = ''; // Limpa as estrelas antigas
    estrelas.forEach(estrela => {
        const div = document.createElement('div');
        div.classList.add('star');
        div.textContent = estrela;
        estrelasContainer.appendChild(div);
    });
}

// Função para ordenar array (usado tanto para números quanto estrelas)
function ordenarChave(v, ascendente = true) {
    if (ascendente) {
        v.sort(function (a, b) { return a - b });
    } else {
        v.sort(function (a, b) { return b - a });
    }
}

// Função para mostrar a chave (atualizar UI)
function mostrarChave(arr, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Limpa o conteúdo anterior
    arr.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('number'); // Usa a mesma classe 'number' para estilo
        div.textContent = item;
        container.appendChild(div);
    });
}

// Mostrar Chave Ordenada
function mostrarChaveOrdenada() {
    // Ordenar números da sorte
    ordenarChave(numerosSorte, true);
    mostrarChave(numerosSorte, 'numeros_sorte');
    
    // Ordenar estrelas
    ordenarChave(estrelas, true);
    mostrarChave(estrelas, 'estrelas');
}
