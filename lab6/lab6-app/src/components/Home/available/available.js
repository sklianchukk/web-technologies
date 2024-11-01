import React from 'react';
import './available.css';
import Passat from '../../../images/passatb2.jpg'
import Polo from '../../../images/polo.jpg'
import Alien from '../../../images/alien.jpg'
import BigFoot from '../../../images/bigfoot.jpg'
import Junk from '../../../images/junk.jpg'
import Tesla from '../../../images/tesla.jpg'

const cars = [
    { id: 1, name: 'Volkswagen Passat B8', year: 1992, price: 1500, available: true, image: Passat },
    { id: 2, name: 'Polo amg', year: 2000, price: 800, available: false, image: Polo },
    { id: 3, name: 'Audi Alien', year: 2055, price: 17000, available: true, image: Alien },
    { id: 4, name: 'Big Foot на город', year: 2005, price: 10000, available: false, image: BigFoot },
    { id: 5, name: 'Легенькі підфарбування', year: 2014, price: 6000, available: true, image: Junk },
    { id: 6, name: 'газ + бензин', year: 2023, price: 13000, available: true, image: Tesla },
];

const CarItem = ({ car }) => {
    return (
        <div className={`car-item ${car.available ? 'available' : 'sold'}`}>
            <img src={car.image} alt={car.name} className="car-image" />
            <h3>{car.name}</h3>
            <p>Рік випуску: {car.year}</p>
            <p>Ціна: ${car.price}</p>
            <p className="availability">
                {car.available ? 'Наявний' : 'Продано'}
            </p>
        </div>
    );
};

// Основний компонент для відображення списку автомобілів
const Available = () => {
    return (
        <div className="car-list">
            <h2>Наявні Автомобілі у Дяді Толі</h2>
            <div className="car-list-items">
                {cars.map(car => (
                    <CarItem key={car.id} car={car} />
                ))}
            </div>
        </div>
    );
};

export default Available;
