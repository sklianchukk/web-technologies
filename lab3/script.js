import {cars} from "/js/cars.js";

let currentCars = [...cars];

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
        `;
        carListDiv.appendChild(carDiv);
    });
    calculateTotalHorsePower(carList);
}

displayCars(currentCars);

function searchCars() {
    const searchQuery = document.getElementById('search').value.toLowerCase().trim();
    currentCars = cars.filter(car =>
        car.manufacturer.toLowerCase().includes(searchQuery)
    );
    displayCars(currentCars);
}

function clearSearch() {
    const searchInput = document.getElementById('search');
    searchInput.value = '';
    currentCars = [...cars];
    displayCars(currentCars);
}

let isSortedAscending = true;

function sortCarsBySpeed() {
    if (isSortedAscending) {
        currentCars = [...currentCars].sort((a, b) => a.maxSpeed - b.maxSpeed);

    } else {
        currentCars = [...currentCars].sort((a, b) => b.maxSpeed - a.maxSpeed);
    }

    displayCars(currentCars);

    isSortedAscending = !isSortedAscending;
}


function calculateTotalHorsePower(carList) {
    const totalHorsePower = carList.reduce((sum, car) => sum + car.horsePower, 0);
    document.getElementById('totalHorsePower').textContent = totalHorsePower;
}

window.searchCars = searchCars;
window.clearSearch = clearSearch;
window.sortCarsBySpeed = sortCarsBySpeed;
window.calculateTotalHorsePower = calculateTotalHorsePower;
