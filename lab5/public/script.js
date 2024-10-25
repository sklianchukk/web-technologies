document.addEventListener("DOMContentLoaded", () => {
    const sortCarBtn = document.getElementById("sort-button");
    if (sortCarBtn) {
        sortCarBtn.addEventListener("click", sortCarsByMaxSpeed);
    }

    const searchButton = document.getElementById("search-button");
    if (searchButton) {
        searchButton.addEventListener("click", searchCars);
    }

    const clearBtn = document.getElementById("reset-button");
    if (clearBtn) {
        clearBtn.addEventListener("click", clearSearch);
    }

    const addBtn = document.getElementById("add-btn");
    if (addBtn) {
        addBtn.addEventListener("click", () => {
            document.getElementById("modal").style.display = "block";
        });
    }

    const closeModalBtn = document.getElementById("close-modal");
    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", () => {
            document.getElementById("modal").style.display = "none";
        });
    }

    const closeEditModalBtn = document.getElementById("close-edit-modal");
    if (closeEditModalBtn) {
        closeEditModalBtn.addEventListener("click", () => {
            document.getElementById("edit-modal").style.display = "none";
        });
    }

    document.getElementById("add-car-form").addEventListener("submit", function (event) {
        event.preventDefault();
        addCar();
    });

    document.getElementById("edit-car-form").addEventListener("submit", function (event) {
        event.preventDefault();
        editCar();
    });

    fetchCars();
});

let currentCars = [];
let filteredCars = [];
let isSortedAscending = true;

// Завантаження початкового списку автомобілів
async function fetchCars() {
    try {
        const response = await fetch('http://localhost:3000/cars');
        currentCars = await response.json();
        filteredCars = [...currentCars]; // Копіюємо початковий список
        displayCars(filteredCars);
    } catch (error) {
        console.error('Error fetching cars:', error);
    }
}

function displayCars(carList) {
    const carListDiv = document.getElementById('carList');
    carListDiv.innerHTML = '';
    carList.forEach(car => {
        const carDiv = document.createElement('div');
        carDiv.className = 'item';
        carDiv.innerHTML = `
            <strong>Manufacturer:</strong> ${car.manufacturer} <br>
            <strong>Horse Power:</strong> ${car.horsepower} HP <br>
            <strong>Max Speed:</strong> ${car.maxspeed} km/h <br>
            <button class="edit-button" data-id="${car.id}">Edit</button>
            <button class="delete-button" data-id="${car.id}">Delete</button>
            <br><br>
        `;
        carListDiv.appendChild(carDiv);
    });

    document.querySelectorAll(".edit-button").forEach(button => {
        button.addEventListener("click", () => openEditModal(button.dataset.id));
    });

    document.querySelectorAll(".delete-button").forEach(button => {
        button.addEventListener("click", () => deleteCar(button.dataset.id));
    });

    calculateTotalHorsePower(carList);
}

async function addCar() {
    const manufacturer = document.getElementById("car-manufacturer").value.trim();
    const horsepower = parseInt(document.getElementById("car-horsepower").value, 10);
    const maxspeed = parseInt(document.getElementById("car-maxspeed").value, 10);

    if (!manufacturer || isNaN(horsepower) || isNaN(maxspeed)) {
        alert("Please fill in all the fields correctly");
        return;
    }

    const newCar = { manufacturer, horsepower, maxspeed };

    try {
        const response = await fetch('http://localhost:3000/cars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCar)
        });

        if (response.ok) {
            document.getElementById("modal").style.display = "none";
            fetchCars();
        } else {
            alert("Failed to add car");
        }
    } catch (error) {
        console.error('Error adding car:', error);
    }
}

async function editCar() {
    const editId = document.getElementById("editId").value.trim();
    const editManufacturer = document.getElementById("edit-car-manufacturer").value.trim();
    const editHorsePower = parseInt(document.getElementById("edit-car-horsepower").value, 10);
    const editMaxSpeed = parseInt(document.getElementById("edit-car-maxspeed").value, 10);

    if (!editManufacturer || isNaN(editHorsePower) || isNaN(editMaxSpeed)) {
        alert("Please fill in all the fields correctly");
        return;
    }

    const updatedCar = { manufacturer: editManufacturer, horsepower: editHorsePower, maxspeed: editMaxSpeed };

    try {
        const response = await fetch(`http://localhost:3000/cars/${editId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedCar)
        });

        if (response.ok) {
            document.getElementById("edit-modal").style.display = "none";
            fetchCars();
        } else {
            alert("Failed to edit car");
        }
    } catch (error) {
        console.error('Error editing car:', error);
    }
}

function calculateTotalHorsePower(carList) {
    const totalHorsePower = carList.reduce((sum, car) => sum + car.horsepower, 0);
    document.getElementById('totalHorsePower').textContent = totalHorsePower;
}


function searchCars() {
    const query = document.getElementById('search').value.trim().toLowerCase();
    fetch(`http://localhost:3000/cars/search?q=${query}`)
        .then(response => response.json())
        .then(filteredCars => {
            displayCars(filteredCars);
        })
        .catch(error => console.error('Error searching cars:', error));
}

function clearSearch() {
    document.getElementById('search').value = '';
    filteredCars = [...currentCars];
    displayCars(filteredCars);
}

function sortCarsByMaxSpeed(order) {
    fetch(`http://localhost:3000/cars/sort?order=${order}`)
        .then(response => response.json())
        .then(sortedCars => {
            displayCars(sortedCars);
        })
        .catch(error => console.error('Error sorting cars:', error));
}


function openEditModal(carId) {
    const car = currentCars.find(car => car.id == carId);
    if (car) {
        const editManufacturerInput = document.getElementById("edit-car-manufacturer");
        const editHorsePowerInput = document.getElementById("edit-car-horsepower");
        const editMaxSpeedInput = document.getElementById("edit-car-maxspeed");
        const editIdInput = document.getElementById("editId");

        if (editManufacturerInput && editHorsePowerInput && editMaxSpeedInput && editIdInput) {
            editManufacturerInput.value = car.manufacturer;
            editHorsePowerInput.value = car.horsepower;
            editMaxSpeedInput.value = car.maxspeed;
            editIdInput.value = car.id;

            document.getElementById("edit-modal").style.display = "block";
            currentEditIndex = carId;
        } else {
            console.error("One or more input elements for editing are not found.");
        }
    } else {
        console.error("Car not found for editing.");
        alert("Car not found");
    }
}

async function deleteCar(carId) {
    try {
        const response = await fetch(`http://localhost:3000/cars/${carId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            fetchCars();
        } else {
            alert("Failed to delete car");
        }
    } catch (error) {
        console.error('Error deleting car:', error);
    }
}
