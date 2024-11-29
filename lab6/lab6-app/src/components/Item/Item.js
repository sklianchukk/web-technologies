import React, {useContext, useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {ItemsContext} from '../../context/itemscontext';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../redux/cartAction';
import './Item.css';

const ItemPage = () => {
  const {id} = useParams();
  const {items} = useContext(ItemsContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [count, setCount] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5005/api/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();

        const contextItem = items.find(contextItem => contextItem.id === parseInt(id));
        if (contextItem) {
          data.image = contextItem.image;
        }

        if (!Array.isArray(data.color)) {
          data.color = [data.color];
        }
        if (!Array.isArray(data.year)) {
          data.year = [data.year];
        }
        setItem(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, items]);

  const handleAddToCart = () => {
    if (!selectedYear || !selectedColor) {
      alert('Please select both year and color');
      return;
    }

    const itemWithSelection = {...item, selectedYear, selectedColor, count};
    dispatch(addToCart(itemWithSelection));
    alert('Good choice!');
  };

  if (loading) return <p>Loading...</p>;
  if (!item) return <p>Item not found</p>;

  return (
    <div className="item-page">
      <div className="item-image-container">
        <img src={item.image} alt={item.name} className="item-image"/>
      </div>
      <div className="item-details">
        <h1>{item.name}</h1>
        <h2 className="description">Тут мав би бути якийсь великий опис, але все, що я придумав, це написати опис
          так, як ви це читаєте зараз</h2>
        <div className="characteristics">
                    <span className="characteristic">
                        Year:
                        <select
                          className="characteristic"
                          value={selectedYear}
                          onChange={(e) => setSelectedYear(e.target.value)}
                        >
                            <option value="">Select year</option>
                          {Array.isArray(item.year) && item.year.map((year, index) => (
                            <option key={index} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                    </span>
          <span className="characteristic">
                        Color:
                        <select
                          className="characteristic"
                          value={selectedColor}
                          onChange={(e) => setSelectedColor(e.target.value)}
                        >
                            <option value="">Select color</option>
                          {Array.isArray(item.color) && item.color.map((color, index) => (
                            <option key={index} value={color}>
                              {color}
                            </option>
                          ))}
                        </select>
                    </span>

        </div>

        <div className="countable-field">
          <label>Count</label>
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(Math.max(1, parseInt(e.target.value, 10) || 1))}
          />
        </div>
        <div className="button-container">
          <button className="back-button" onClick={() => navigate(-1)}>
            Go back
          </button>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
