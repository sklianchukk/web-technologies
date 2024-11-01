import React from 'react';

const cars = [
    { id: 1, name: 'BMW X5', year: 2015, price: 15000 },
    { id: 2, name: 'Volkswagen Golf', year: 2012, price: 8000 },
    { id: 3, name: 'Audi A6', year: 2017, price: 17000 },
];

const Catalog = () => (
    <div>
        <h2>Каталог Автомобілів</h2>
        <ul>
            {cars.map(car => (
                <li key={car.id}>
                    {car.name} - {car.year} - ${car.price}
                </li>
            ))}
        </ul>
    </div>
);

export default Catalog;
