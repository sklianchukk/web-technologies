import React from 'react';
import './available.css';
import Passat from '../../../context/images/passatb2.jpg'
import Polo from '../../../context/images/polo.jpg'
import Alien from '../../../context/images/alien.jpg'
import BigFoot from '../../../context/images/bigfoot.jpg'
import Junk from '../../../context/images/junk.jpg'
import Tesla from '../../../context/images/tesla.jpg'
import {Link} from "react-router-dom";

const cars = [
  {id: 1, name: 'Volkswagen Passat B8', color: "dark", year: 1992, price: 1500, available: true, image: Passat},
  {id: 2, name: 'Polo amg', color: "bright", year: 2000, price: 800, available: false, image: Polo},
  {id: 3, name: 'Audi Alien', color: "normal", year: 2055, price: 17000, available: true, image: Alien},
  {id: 4, name: 'Big Foot на город', color: "dark", year: 2005, price: 10000, available: false, image: BigFoot},
  {id: 5, name: 'Легенькі підфарбування', color: "dark", year: 2014, price: 6000, available: true, image: Junk},
  {id: 6, name: 'газ + бензин', color: "bright", year: 2023, price: 13000, available: true, image: Tesla},
];

const CarItem = ({car}) => {
  return (
    <div className={`catalog-item ${car.available ? 'available' : 'sold'}`}>
      <img src={car.image} alt={car.name} className="catalog-item-image"/>
      <h3>{car.name}</h3>
      <p>Рік випуску: {car.year}</p>
      <p>Ціна: ${car.price}</p>
      <p>Колір: {car.color}</p>
      <p>
        {car.available ? 'У наявності' : 'Продано'}
      </p>
      <Link to={`/item/${car.id}`} className="catalog-view-more">Деталі</Link>
    </div>
  );
};

// Основний компонент для відображення списку автомобілів
const Available = () => {
  return (
    <div className="car-list">
      <h2>Новинки у Дяді Толі</h2>
      <div className="car-list-items">
        {cars.map(car => (
          <CarItem key={car.id} car={car}/>
        ))}
      </div>
    </div>
  );
};

export default Available;
