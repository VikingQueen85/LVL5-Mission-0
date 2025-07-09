import React from 'react';

function SearchSection() {
    return (
        <section className="search-section">
            <input type="text" placeholder="Search..." />
            <button type="button">Search</button>
        </section>
    );
}

export default SearchSection;