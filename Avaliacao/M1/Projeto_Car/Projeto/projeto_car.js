"use strict";

// Define constants
const CURRENT_YEAR = new Date().getFullYear();
const NUM_YEARS = 25;

// Predefined arrays for brands and their corresponding models
const BRAND_MODEL_MAP = {
    "Audi": ["A3", "A4", "A5", "A6", "A8", "Q7", "Q8"],
    "BMW": ["i4", "i8", "X3", "M2", "M3", "M4", "X5"],
    "Chevrolet": ["Camaro", "Impala", "Malibu", "Tahoe"],
    "Citroen": ["AMI", "Berlingo", "C3", "C4", "Picasso"],
    "Ford": ["Explorer", "F-150", "Fiesta", "Mustang"],
    "Mercedes Benz": ["C-Class", "E-Class", "G-Class", "S-Class"],
    "Volkswagen": ["Golf", "Passat", "Polo"],
};

const DOORS_LIST = ["3", "5"];
const COLORS_LIST = ["Preto", "Cinzento", "Branco", "Azul", "Vermelho", "Laranja", "Verde"];
const PRICES_LIST = ["1 000€", "5 000€", "10 000€", "15 000€", "20 000€", "25 000€", "30 000€", "35 000€", "40 000€", "45 000€", "50 000€"];
const YEARS_LIST = Array.from({ length: NUM_YEARS + 1 }, (_, i) => CURRENT_YEAR - i);

// Load cars from localStorage or use default data
let autos = JSON.parse(localStorage.getItem('autos')) || [
    { id: 1, marca: "Audi", modelo: "A4", ano: 2015, preco: "30 000", portas: 5, cor: "Preto" },
    { id: 2, marca: "BMW", modelo: "X5", ano: 2017, preco: "50 000", portas: 5, cor: "Branco" }
];

// Selected filters object
let searchFilters = {
    marca: '',
    modelo: '',
    ano: '',
    minimo: '',
    maximo: '',
    cor: ''
};

// Select DOM elements
const selectElements = {
    marca: document.getElementById('marca'),
    modelo: document.getElementById('modelo'),
    ano: document.getElementById('ano'),
    minimo: document.getElementById('minimo'),
    maximo: document.getElementById('maximo'),
    cor: document.getElementById('cor')
};

// Initialize form elements
const addCarButton = document.getElementById('addCarButton');
const carFormSection = document.getElementById('add-edit-car');
const cancelButton = document.getElementById('cancelButton');
const carForm = document.getElementById('carForm');
const newMarcaSelect = document.getElementById('newMarca');
const newModeloSelect = document.getElementById('newModelo');

// Load filters and display initial cars
document.addEventListener('DOMContentLoaded', initializeFilters);
selectElements.marca.addEventListener('change', () => updateModelOptions(false)); // Filter section
newMarcaSelect.addEventListener('change', () => updateModelOptions(true)); // Add car form
Object.keys(selectElements).forEach(key => {
    selectElements[key].addEventListener('input', updateFilters);
});

// Show the form when the Add Car button is clicked
addCarButton.addEventListener('click', () => {
    carFormSection.style.display = 'block';
    carForm.reset(); // Reset form fields
    document.getElementById('editingCarIndex').value = ''; // Clear editing index
    document.getElementById('form-title').textContent = 'Adicionar Novo Automóvel'; // Reset form title
    document.getElementById('formButton').textContent = 'Adicionar Carro'; // Reset button text
});

// Hide the form when the Cancel button is clicked
cancelButton.addEventListener('click', () => {
    carFormSection.style.display = 'none';
    carForm.reset();
    document.getElementById('editingCarIndex').value = ''; // Clear editing index
    document.getElementById('form-title').textContent = 'Adicionar Novo Automóvel'; // Reset form title
    document.getElementById('formButton').textContent = 'Adicionar Carro'; // Reset button text
});

// Form submission event listener for adding/editing cars
carForm.addEventListener('submit', handleFormSubmit);

// Populate model options based on selected brand
newMarcaSelect.addEventListener('change', updateModelOptions);

// Add event listener to the sortBy select element
document.getElementById('sortBy').addEventListener('change', handleSortChange);

// Generate new unique ID for new cars
function generateNewId() {
    const ids = autos.map(car => car.id);
    return ids.length ? Math.max(...ids) + 1 : 1; // Get the max ID and add 1, or return 1 if empty
}

// Function to save autos to localStorage
function saveCarsToLocalStorage() {
    localStorage.setItem('autos', JSON.stringify(autos));
}

// Initialize filters with predefined values
function initializeFilters() {
    populateSelect(YEARS_LIST, selectElements.ano);
    populateSelect(Object.keys(BRAND_MODEL_MAP), selectElements.marca); // Use Object.keys to get an array of brand names
    populateSelect(PRICES_LIST, selectElements.minimo);
    populateSelect(PRICES_LIST, selectElements.maximo);
    populateSelect(COLORS_LIST, selectElements.cor);

    populateSelect(Object.keys(BRAND_MODEL_MAP), newMarcaSelect); // Use Object.keys to get an array of brand names for the add car form
    populateSelect([], selectElements.modelo); // This ensures it's empty until a brand is selected
    populateSelect(YEARS_LIST, document.getElementById('newAno'));  // Populate year
    populateSelect(PRICES_LIST, document.getElementById('newPreco'));  // Populate price
    populateSelect(COLORS_LIST, document.getElementById('newCor'));  // Populate color

    displayCars(autos); // Display all cars initially
}

// Populate dropdown options
function populateSelect(optionsList, selectElement) {
    selectElement.innerHTML = `<option value="">Selecionar</option>` +
        optionsList.map(option => `<option value="${option}">${option}</option>`).join('');
}

//KEEP REVIEWING FROM HERE (STEP BY STEP)

// Update the model dropdown when the brand is selected
function updateModelOptions(isAdding = false) {
    const selectedBrand = isAdding ? newMarcaSelect.value : selectElements.marca.value; // Get the selected brand from the appropriate dropdown
    const models = BRAND_MODEL_MAP[selectedBrand] || [];
    
    const modelSelect = isAdding ? newModeloSelect : selectElements.modelo; // Determine which model dropdown to populate
    populateSelect(models, modelSelect);
}

// Update filters and display results
function updateFilters(e) {
    const { id, value } = e.target;
    searchFilters[id] = value;
    filterAndDisplayCars();
}

function formatPrice(price) {
    // Remove the euro sign and return the remaining value
    return price.replace('€', '').trim();
}

// Form submit handler for adding or editing a car
function handleFormSubmit(e) {
    e.preventDefault();

    const newCar = {
        id: document.getElementById('editingCarIndex').value === '' ? generateNewId() : parseInt(document.getElementById('editingCarIndex').value, 10),
        marca: newMarcaSelect.value,
        modelo: newModeloSelect.value,
        ano: Number(document.getElementById('newAno').value),
        preco: formatPrice(document.getElementById('newPreco').value),
        portas: Number(document.getElementById('newPortas').value),
        cor: document.getElementById('newCor').value
    };

    const editingIndex = document.getElementById('editingCarIndex').value;

    if (editingIndex === '') {
        // Add new car
        autos.push(newCar);
    } else {
        // Edit existing car
        const index = autos.findIndex(car => car.id === newCar.id);
        autos[index] = newCar;
        document.getElementById('editingCarIndex').value = '';
        document.getElementById('form-title').textContent = 'Adicionar Novo Automóvel';
        document.getElementById('formButton').textContent = 'Adicionar Carro';
    }

    carForm.reset(); // Reset form fields
    carFormSection.style.display = 'none'; // Hide form after submission
    saveCarsToLocalStorage(); // Save to localStorage
    filterAndDisplayCars(); // Reapply filters and display cars
}

// Filter and display cars
function filterAndDisplayCars() {
    let filteredCars = autos.filter(car => {
        return (!searchFilters.marca || car.marca === searchFilters.marca) &&
            (!searchFilters.modelo || car.modelo === searchFilters.modelo) &&
            (!searchFilters.minimo || parseFloat(car.preco.replace('€', '').replace('.', '')) >= parseFloat(searchFilters.minimo.replace('€', '').replace('.', ''))) &&
            (!searchFilters.maximo || parseFloat(car.preco.replace('€', '').replace('.', '')) <= parseFloat(searchFilters.maximo.replace('€', '').replace('.', ''))) &&
            (!searchFilters.ano || car.ano === Number(searchFilters.ano)) &&
            (!searchFilters.cor || car.cor === searchFilters.cor);
    });

    displayCars(filteredCars);
}

// Display cars in the result section
function displayCars(cars) {
    const resultContainer = document.getElementById('resultado');
    const numAutos = document.getElementById('numAutos');

    resultContainer.innerHTML = '';
    if (cars.length === 0) {
        resultContainer.innerHTML = `<tr><td colspan="7" class="alerta error">Nenhum automóvel encontrado</td></tr>`;
    } else {
        cars.forEach((car) => {
            resultContainer.innerHTML += `
                <tr>
                    <td>${car.marca}</td>
                    <td>${car.modelo}</td>
                    <td>${car.ano}</td>
                    <td>${car.preco}€</td>
                    <td>${car.portas}</td>
                    <td>${car.cor}</td>
                    <td>
                        <button onclick="editCar(${car.id})"><img src="edit.png"></button>
                        <button onclick="deleteCar(${car.id})"><img src="delete.png"></button>
                    </td>
                </tr>`;
        });
    }
  
    numAutos.textContent = cars.length;
}

// Edit car function
function editCar(id) {
    const car = autos.find(car => car.id === id);
    newMarcaSelect.value = car.marca;
    updateModelOptions(true); // Populate model dropdown based on the brand
    
    // Set the values in the form fields
    newModeloSelect.value = car.modelo;
    document.getElementById('newAno').value = car.ano;
    document.getElementById('newPreco').value = `${car.preco}€`;
    document.getElementById('newPortas').value = car.portas;
    document.getElementById('newCor').value = car.cor;
    document.getElementById('editingCarIndex').value = car.id;

    document.getElementById('form-title').textContent = 'Editar Automóvel';
    document.getElementById('formButton').textContent = 'Guardar Alterações';

    carFormSection.style.display = 'block'; // Show form when editing
}

// Delete car function
function deleteCar(id) {
    const car = autos.find(car => car.id === id);
    const confirmDelete = window.confirm(`Apagar este automóvel?\n\nMarca: ${car.marca} Modelo: ${car.modelo} Ano: ${car.ano}\nPreço: ${car.preco}€ Portas: ${car.portas} Cor: ${car.cor}`);

    if (confirmDelete) {
        autos = autos.filter(car => car.id !== id);  // Remove the car from the list
        saveCarsToLocalStorage(); // Save updated list to localStorage
        displayCars(autos);       // Update the list
    }
}

// Handle sort selection
function handleSortChange() {
    const sortBy = document.getElementById('sortBy').value;

    if (sortBy === 'marca-asc') {
        // Sort by brand name ascending (A-Z)
        autos.sort((a, b) => a.marca.toLowerCase().localeCompare(b.marca.toLowerCase()));
    } else if (sortBy === 'marca-desc') {
        // Sort by brand name descending (Z-A)
        autos.sort((a, b) => b.marca.toLowerCase().localeCompare(a.marca.toLowerCase()));
    } else {
        // Default sorting (no sort or reset to the original list order)
        autos = [...autos];  // Keep the original order or implement your own logic
    }

    displayCars(autos);  // Update the display with sorted list
}

