import React from 'react';

const SortButton = ({ sortOrder, toggleSortOrder }) => {
    return (
        <button className="sort-button" onClick={toggleSortOrder}>
            Sort by Price: {sortOrder === 'desc' ? 'До меншого' : 'До більшого'}
        </button>
    );
};

export default SortButton;