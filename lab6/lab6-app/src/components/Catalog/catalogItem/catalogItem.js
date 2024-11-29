import React from 'react';
import {Link} from 'react-router-dom';
import './catalogItem.css'

const CatalogItem = ({id, name, available, price, image, hp}) => {
  return (
    <div className={`catalog-item ${available ? 'available' : 'sold'}`}>
      <img src={image} alt={name} className="catalog-item-image"/>
      <h3>{name}</h3>
      <p>Двигун: {hp}hp</p>
      <p>Ціна: ${price}</p>
      <p className="availability">
        {available ? 'У наявності' : 'Продано'}
      </p>
      <Link to={`/item/${id}`} className="catalog-view-more">Деталі</Link>
    </div>
  );
};

export default CatalogItem;