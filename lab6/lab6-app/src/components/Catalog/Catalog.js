import React, { useContext, useState } from 'react';
import { ItemsContext } from '../../context/itemscontext';
import CatalogItem from './catalogItem/catalogItem';
import InputComponent from './inputComponents/inputComponents';
import SelectComponent from './selectComponent/selectComponent';
import SortButton from './sort/sort';
import '../Catalog/Catalog.css';

const Catalog = () => {
    const { items } = useContext(ItemsContext);
    const [sortOrder, setSortOrder] = useState('desc');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPriceRange, setSelectedPriceRange] = useState('');
    const [selectedColor, setSelectedColor] = useState('');

    // Function to parse the selected price range into min and max values
    const parsePriceRange = (range) => {
        if (!range) return [null, null];

        const [min, max] = range
            .replace('+', '')  // Remove "+" if it’s there
            .split('-')        // Split by the hyphen
            .map(price => parseInt(price.trim(), 10)); // Parse as integers

        return [min, max || Infinity]; // If max is undefined, set to Infinity for upper limit
    };

    // Filtering items based on search, price, and color
    const filteredItems = items.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase().trim());

        // Parse selected price range
        const [minPrice, maxPrice] = parsePriceRange(selectedPriceRange);

        // Check if the item's price is within the selected range
        const matchesPrice = minPrice !== null ? item.price >= minPrice && item.price <= maxPrice : true;

        const matchesColor = selectedColor ? item.color === selectedColor : true;

        return matchesSearch && matchesPrice && matchesColor;
    });

    // Sorting filtered items
    const sortedItems = filteredItems.sort((a, b) => {
        return sortOrder === 'desc' ? b.price - a.price : a.price - b.price;
    });

    // Handler functions
    const handleSearchChange = (e) => setSearchTerm(e.target.value);
    const handlePriceChange = (e) => setSelectedPriceRange(e.target.value);
    const handleColorChange = (e) => setSelectedColor(e.target.value);
    const toggleSortOrder = () => setSortOrder(prevOrder => (prevOrder === 'desc' ? 'asc' : 'desc'));

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
                    value={selectedPriceRange}
                    onChange={handlePriceChange}
                    className="filter-select"
                    options={[
                        { value: '', label: 'All prices' },
                        { value: '1 - 999', label: '1 - 999' },
                        { value: '1000 - 4999', label: '1000 - 4999' },
                        { value: '+ 5000', label: '5000+' }
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
            <div className="catalog-items">
                {sortedItems.length > 0 ? (
                    sortedItems.map((item, index) => (
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
            <>
                <h1>sdkhjfb</h1>
                <h1>sdkhjfb</h1>
                <h1>sdkhjfb</h1>
            </>
        </div>
    );
};

export default Catalog;
