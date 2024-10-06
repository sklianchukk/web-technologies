let cars = [
    {id: 1, manufacturer: "Nissan Skyline GT-R R34", horsePower: 570, maxSpeed: 165 },
    {id: 2, manufacturer: "Nissan Skyline 2000GTR Hakosuka", horsePower: 743, maxSpeed: 300},
    {id: 3, manufacturer: "Suzuki Swift", horsePower: 2, maxSpeed: 180},
    {id: 4, manufacturer: "BMW M3 Competition 20202020202020 ", horsePower: 98, maxSpeed: 180},
    {id: 5, manufacturer: "Fiat 500", horsePower: 3, maxSpeed: 50},
    {id: 6, manufacturer: "Fiat 600", horsePower: 4, maxSpeed: 60},
    {id: 7, manufacturer: "Porsche GT-2 RS", horsePower: 904, maxSpeed: 887},
    {id: 8, manufacturer: "Djygul", horsePower: 652, maxSpeed: 9292},
    {id: 9, manufacturer: "Volkswagen golf", horsePower: 183, maxSpeed: 999},
    {id: 10, manufacturer: "BMW e38", horsePower: 209, maxSpeed: 205},
];

let currentCars = [...cars];

const addCarForm = document.getElementById('add-car-form');
const editCarForm = document.getElementById('edit-car-form');
const closeModalBtn = document.getElementById("close-modal");
const closeEditModalBtn = document.getElementById("close-edit-modal");
const modal = document.getElementById("modal");
const editModal = document.getElementById("edit-modal");

function displayCars(carList) {
    const carListDiv = document.getElementById('carList');
    carListDiv.innerHTML = '';
    carList.forEach(car => {
        const carDiv = document.createElement('div');
        carDiv.className = 'item';
        carDiv.innerHTML = `
          <strong>Manufacturer:</strong> ${car.manufacturer} <br>
          <strong>HorsePower:</strong> ${car.horsePower} hP <br>
          <strong>MaxSpeed:</strong> ${car.maxSpeed} kpH
          <br>
          <button onclick="openEditModal(${car.id})">Edit</button>
        `;
        carListDiv.appendChild(carDiv);
    });
    calculateTotalHorsePower(carList);
}

function generateUniqueId() {
    return currentCars.length > 0
        ? Math.max(...currentCars.map(car => car.id)) + 1
        : 1;
}

addCarForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const manufacturer = document.getElementById("car-manufacturer").value.trim();
    const horsePower = parseInt(document.getElementById("car-horsePower").value, 10);
    const maxSpeed = parseInt(document.getElementById("car-maxSpeed").value, 10);

    if (horsePower < 0 || maxSpeed < 0) {
        alert("Error: Power and Max speed cannot be negative. Try again.");
        return;
    }

    const duplicateCar = currentCars.some(car => car.manufacturer.toLowerCase() === manufacturer.toLowerCase());

    if (duplicateCar) {
        alert("Error: A car with this manufacturer already exists. Try again.");
        return;
    }

    const newCar = {
        id: generateUniqueId(),
        manufacturer,
        horsePower,
        maxSpeed
    };

    currentCars.push(newCar);
    displayCars(currentCars);
    closeModal();
    addCarForm.reset();
});


let currentEditIndex = null;

function openEditModal(id) {
    currentEditIndex = currentCars.findIndex(car => car.id === id);
    const carToEdit = currentCars[currentEditIndex];

    document.getElementById("edit-car-manufacturer").value = carToEdit.manufacturer;
    document.getElementById("edit-car-horsePower").value = carToEdit.horsePower;
    document.getElementById("edit-car-maxSpeed").value = carToEdit.maxSpeed;

    editModal.style.display = "block";
}

editCarForm.addEventListener("submit", (event) => {
    event.preventDefault();

    currentCars[currentEditIndex].manufacturer = document.getElementById("edit-car-manufacturer").value;
    currentCars[currentEditIndex].horsePower = parseInt(document.getElementById("edit-car-horsePower").value, 10);
    currentCars[currentEditIndex].maxSpeed = parseInt(document.getElementById("edit-car-maxSpeed").value, 10);

    displayCars(currentCars);
    closeEditModal();
});

closeModalBtn.addEventListener("click", closeModal);
closeEditModalBtn.addEventListener("click", closeEditModal);

function closeModal() {
    modal.style.display = 'none';
}

function closeEditModal() {
    editModal.style.display = 'none';
}

document.getElementById("add-car-btn").addEventListener("click", () => {
    modal.style.display = 'block';
});

displayCars(currentCars);

function calculateTotalHorsePower(carList) {
    const totalHorsePower = carList.reduce((sum, car) => sum + car.horsePower, 0);
    document.getElementById('totalHorsePower').textContent = totalHorsePower;
}

let filteredCars = currentCars

function searchCars() {
    const query = document.getElementById('search').value.trim().toLowerCase();
    filteredCars = currentCars.filter(car => car.manufacturer.toLowerCase().includes(query));
    displayCars(filteredCars);
}

function clearSearch() {
    document.getElementById('search').value = '';
    displayCars(currentCars);
}

let isSortedAscending = true;

function sortCarsByMaxSpeed() {
    if (isSortedAscending) {
        filteredCars = [...filteredCars].sort((a, b) => a.maxSpeed - b.maxSpeed);

    } else {
        filteredCars = [...filteredCars].sort((a, b) => b.maxSpeed - a.maxSpeed);
    }

    displayCars(filteredCars);

    isSortedAscending = !isSortedAscending;

}