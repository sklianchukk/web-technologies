let cars = [
    {id: 1, manufacturer: "Nissan Skyline GT-R R34", horsepower: 570, maxspeed: 165 },
    {id: 2, manufacturer: "Nissan Skyline 2000GTR", horsepower: 743, maxspeed: 300},
    {id: 3, manufacturer: "Suzuki Swift", horsepower: 2, maxspeed: 180},
    {id: 4, manufacturer: "BMW M3 Competition 2020", horsepower: 98, maxspeed: 180},
    {id: 5, manufacturer: "Fiat 500", horsepower: 3, maxspeed: 50},
    {id: 6, manufacturer: "Fiat 600", horsepower: 4, maxspeed: 60},
    {id: 7, manufacturer: "Porsche GT-2 RS", horsepower: 904, maxspeed: 887},
    {id: 8, manufacturer: "Mazda 3", horsepower: 652, maxspeed: 922},
    {id: 9, manufacturer: "Volkswagen golf", horsepower: 183, maxspeed: 999},
    {id: 10, manufacturer: "BMW e38", horsepower: 209, maxspeed: 205},
];

export const getAllCars = (req, res) => {
    res.json(cars);
};

export const addCar = (req, res) => {
    const { manufacturer, horsepower, maxspeed } = req.body;
    const newCar = {
        id: cars.length > 0 ? Math.max(...cars.map(car => car.id)) + 1 : 1,
        manufacturer,
        horsepower,
        maxspeed,
    };
    cars.push(newCar);
    res.status(201).json(newCar);
};

export const editCar = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const carIndex = cars.findIndex(car => car.id === id);
    if (carIndex === -1) {
        return res.status(404).send('Car not found');
    }

    const { manufacturer, horsepower, maxspeed } = req.body;
    cars[carIndex] = { ...cars[carIndex], manufacturer, horsepower, maxspeed };
    res.json(cars[carIndex]);
};

export const deleteCar = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const carIndex = cars.findIndex(car => car.id === id);
    if (carIndex === -1) {
        return res.status(404).send('Car not found');
    }
    const deletedCar = cars.splice(carIndex, 1);
    res.json(deletedCar);
};

export const searchCars = (req, res) => {
    const query = req.query.q ? req.query.q.trim().toLowerCase() : '';
    const filteredCars = cars.filter(car => car.manufacturer.toLowerCase().includes(query));
    res.json(filteredCars);
};

let isSortedAscending = true;

export const sortCars = (req, res) => {
    const sortedCars = [...cars].sort((a, b) => {
        return isSortedAscending ? a.maxspeed - b.maxspeed : b.maxspeed - a.maxspeed;
    });
    isSortedAscending = !isSortedAscending;
    res.json(sortedCars);
};


export const getTotalHorsePower = (req, res) => {
    const totalHorsePower = cars.reduce((sum, car) => sum + car.horsepower, 0);
    res.json({ totalHorsePower });
};
