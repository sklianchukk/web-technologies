import React from 'react';
import { Link } from 'react-router-dom';
import './catalogItem.css'

const CatalogItem = ({ id, name, year, available, price, color,  image }) => {
    return (
        <div className={`catalog-item ${available ? 'available' : 'sold'}`}>
            <img src={image} alt={name} className="catalog-item-image"/>
            <h3>{name}</h3>
            <p>Рік випуску: {year}</p>
            <p>Ціна: ${price}</p>
            <p>Колір: {color}</p>
            <p className="availability">
                {available ? 'У наявності' : 'Продано'}
            </p>
            <Link to={`/item/${id}`} className="catalog-view-more">Деталі</Link>
        </div>
    );
};

export default CatalogItem;


<>
    <h1>sdkhjfb</h1>
    <h1>sdkhjfb</h1>
    <h1>sdkhjfb</h1>
</>