import React from 'react';

const SortButton = ({ sortOrder, toggleSortOrder }) => {
    return (
        <button className="sort-button" onClick={toggleSortOrder}>
            Sort by Price: {sortOrder === 'desc' ? 'highest to lowest price' : 'lowest to highest price'}
        </button>
    );
};

export default SortButton;