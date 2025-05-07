// Classe responsável por gerar os números da sorte e estrelas
class Euromilhoes {
    constructor() {
        this.numerosSorte = [];
        this.estrelas = [];
    }

    // Função para número aleatório entre min e max (inclusive)
    gerarNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Gera 5 números da sorte (1-50) e 2 estrelas (1-9)
    gerarChave() {
        this.numerosSorte = [];
        this.estrelas = [];

        // Gera 5 números da sorte
        while (this.numerosSorte.length < 5) {
            let numero = this.gerarNumeroAleatorio(1, 50);
            if (!this.numerosSorte.includes(numero)) {
                this.numerosSorte.push(numero);
            }
        }

        // Gera 2 estrelas
        while (this.estrelas.length < 2) {
            let estrela = this.gerarNumeroAleatorio(1, 9);
            if (!this.estrelas.includes(estrela)) {
                this.estrelas.push(estrela);
            }
        }
    }

    // Função para ordenar os números e estrelas
    ordenarChave() {
        this.numerosSorte.sort((a, b) => a - b);
        this.estrelas.sort((a, b) => a - b);
    }

    // Retorna a chave gerada
    getChave() {
        return {
            numerosSorte: this.numerosSorte,
            estrelas: this.estrelas
        };
    }
}

// Classe responsável pela interação com o DOM
class Interface {
    constructor() {
        this.euromilhoes = new Euromilhoes();
    }

    // Função para atualizar a interface com os números e estrelas gerados
    atualizarInterface() {
        const numerosContainer = document.getElementById('numeros_sorte');
        const estrelasContainer = document.getElementById('estrelas');

        // Limpa os números e estrelas anteriores
        numerosContainer.innerHTML = '';
        estrelasContainer.innerHTML = '';

        // Atualiza os números da sorte
        this.euromilhoes.numerosSorte.forEach(numero => {
            const div = document.createElement('div');
            div.classList.add('number');
            div.textContent = numero;
            numerosContainer.appendChild(div);
        });

        // Atualiza as estrelas
        this.euromilhoes.estrelas.forEach(estrela => {
            const div = document.createElement('div');
            div.classList.add('star');
            div.textContent = estrela;
            estrelasContainer.appendChild(div);
        });
    }

    // Função para gerar e exibir os números da sorte e estrelas
    gerarNumeros() {
        this.euromilhoes.gerarChave();
        this.atualizarInterface();
    }

    // Função para ordenar e exibir os números da sorte e estrelas
    ordenarChave() {
        this.euromilhoes.ordenarChave();
        this.atualizarInterface();
    }
}

// Instância da classe Interface
const interfaceEuromilhoes = new Interface();

// Funções para os botões
function gerarNumeros() {
    interfaceEuromilhoes.gerarNumeros();
}

function mostrarChaveOrdenada() {
    interfaceEuromilhoes.ordenarChave();
}
