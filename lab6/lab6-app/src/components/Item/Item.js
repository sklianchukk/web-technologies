import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ItemsContext } from '../../context/itemscontext';
import { fetchItemById } from '../../services/api';
import './Item.css';
import SelectComponent from "../Catalog/selectComponent/selectComponent";

const Item = () => {
    const { id } = useParams();
    const { items } = useContext(ItemsContext);
    const navigate = useNavigate();

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    const contextItem = items.find(contextItem => contextItem.id === parseInt(id));

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchItemById(id);
                const apiData = response.data;

                if (contextItem) {
                    apiData.image = contextItem.image;
                }

                setItem(apiData);
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id, contextItem]);

    if (loading) return <p>Loading...</p>;
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
                <div className="countable-field">
                    <label>Count</label>
                    <input type="number" min="1" defaultValue={1}/>
                </div>
                <div className="countable-field">
                    <label>Size</label>
                    <SelectComponent
                        className="filter-select"
                        options={[
                            {value: '', label: 'Select size'},
                            {value: 'XL', label: 'XL'},
                            {value: 'L', label: 'L'},
                            {value: 'M', label: 'M'},
                            {value: 'S', label: 'S'},
                            {value: 'XS', label: 'XS'}
                        ]}
                    />
                </div>
                <div className="button-container">
                    <button className="back-button" onClick={() => navigate(-1)}>Go back</button>
                    <button className="add-to-cart-button">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Item;