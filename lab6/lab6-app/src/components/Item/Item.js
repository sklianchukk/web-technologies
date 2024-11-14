import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ItemsContext } from '../../context/itemscontext';
import './Item.css';

const Item = () => {
    const { id } = useParams();
    const { items } = useContext(ItemsContext);
    const navigate = useNavigate();

    const item = items.find(item => item.id === parseInt(id));
    if (!item) return <p>Item not found</p>;

    return (
        <div className="item-page">
            <div className="item-image-container">
                <img src={item.image} alt={item.name} className="item-image" />

            </div>
            <div className="item-details">
                <div className="characteristics">
                    <span className="characteristic">Color: {item.color}</span>
                    <span className="characteristic">Age: {item.year}</span>
                </div>
                <h1>{item.name}</h1>
                <p className="price">Price: ${item.price.toFixed(2)}</p>
                <p className="description">Тут мав би бути якийсь великий опис, але все, що я придумав, це написати опис
                    так, як ви це читаєте зараз</p>
                <div className="button-container">
                    <button className="back-button" onClick={() => navigate(-1)}>Go back</button>
                </div>
            </div>
        </div>
    );
};

export default Item;