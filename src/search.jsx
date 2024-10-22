import React, { useState } from 'react';

const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Another ' },
    { id: 5, name: 'other ' },
    { id: 6, name: 'India ' },
    { id: 7, name: 'USA ' },
    { id: 8, name: 'Google' },
];

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search..."
            />
            <SearchResults items={filteredItems} />
        </div>
    );
}

const SearchResults = ({ items }) => {
    return (
        <div>
            {items.map((item) => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
};

export default SearchBar;