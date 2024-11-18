import React, { useState, useEffect } from 'react';
import { fetchItems } from '../../services/api';
import CatalogItem from './catalogItem/catalogItem';
import InputComponent from './inputComponents/inputComponents';
import SelectComponent from './selectComponent/selectComponent';
import SortButton from './sort/sort';
import '../Catalog/Catalog.css';
import Loader from './../loader/loader';

const Catalog = () => {
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('desc');
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');
    const [loading, setLoading] = useState(false);
    const [fetchTimeout, setFetchTimeout] = useState(null);

    const fetchData = async () => {
        setLoading(true);

        if (fetchTimeout) {
            clearTimeout(fetchTimeout);
        }

        const timeoutId = setTimeout(async () => {
            try {
                const response = await fetchItems(searchTerm, sortOrder, selectedColor, selectedPrice);
                setItems(response.data);
            } catch (error) {
                console.error("Error fetching items:", error);
            }
            setLoading(false);
        }, 1000);

        setFetchTimeout(timeoutId);
    };

    useEffect(() => {
        fetchData();
        return () => {
            if (fetchTimeout) {
                clearTimeout(fetchTimeout);
            }
        };
    }, [searchTerm, sortOrder, selectedColor, selectedPrice]);

    const filteredItems = items.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase().trim());
        const matchesColor = selectedColor ? item.color === selectedColor : true;
        const matchesPrice = selectedPrice ? item.price <= parseInt(selectedPrice) : true;
        return matchesSearch && matchesPrice && matchesColor;
    });

    const sortedItems = filteredItems.sort((a, b) => {
        return sortOrder === 'desc' ? b.price - a.price : a.price - b.price;
    });

    const handleSearchChange = (e) => setSearchTerm(e.target.value);
    const toggleSortOrder = () => setSortOrder(prevOrder => (prevOrder === 'desc' ? 'asc' : 'desc'));
    const handleColorChange = (e) => setSelectedColor(e.target.value);
    const handlePriceChange = (e) => setSelectedPrice(e.target.value);

    return (
        <div className="catalog">
            <div className="filters">
                <InputComponent
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search by name..."
                    className="search-bar"
                />
                <SortButton sortOrder={sortOrder} toggleSortOrder={toggleSortOrder} />
            </div>
            <div className="selectComponent">
                <SelectComponent
                    value={selectedPrice}
                    onChange={handlePriceChange}
                    className="filter-select"
                    options={[
                        { value: '', label: 'Prices up to' },
                        { value: '1000', label: '1000' },
                        { value: '5000', label: '5000' },
                        { value: '12000', label: '12000' }
                    ]}
                />
            </div>
            <div>
                <SelectComponent
                    value={selectedColor}
                    onChange={handleColorChange}
                    className="filter-select"
                    options={[
                        { value: '', label: 'All colors' },
                        { value: 'classic', label: 'classic' },
                        { value: 'dark', label: 'dark' },
                        { value: 'bright', label: 'bright' }
                    ]}
                />
            </div>

            {loading ? (
                <Loader />
            ) : (
                <div className="catalog-items">
                    {sortedItems.length > 0 ? (
                        sortedItems.map((item) => (
                            <CatalogItem
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                year={item.year}
                                color={item.color}
                                price={item.price}
                                available={item.available}
                                image={item.image}
                            />
                        ))
                    ) : (
                        <p>Дядько Толік не має зараз, але вже везе тобі таку ластівку!</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Catalog;
