function display(val) {
    const displayElement = document.getElementById('display');
    
    // Se o valor atual for 0 e for adicionado outro valor numérico, substitui o 0
    if (displayElement.value == '0') {
        displayElement.value = val;
    } else {
        displayElement.value += val;
    }

    return val;
}

function solve() {
    let x = document.getElementById('display').value;
    
    try {
        let y = eval(x); // Calcula a expressão matemática
        document.getElementById('display').value = y;
        return y;
    } catch (error) {
        document.getElementById('display').value = 'Error'; // Tratamento de erro
    }
}

function clearDisplay(){

    document.getElementById('display').value = '0'

}

function clearLastElement() {

    let clearLast = document.getElementById('display').value;
    clearLast = clearLast.slice(0, -1);

    if (clearLast == "") {
        clearLast = "0";
    }

    document.getElementById('display').value = clearLast;
}

// MS 
function memoryStore() {
    memory = parseFloat(document.getElementById('display').value); // Armazena o valor atual do display
}

// MR 
function memoryRecall() {
    document.getElementById('display').value = memory; // Exibe o valor da memória no display
}

// MC
function memoryClear() {
    memory = 0; 
}