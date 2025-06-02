import React, { useState } from 'react'

const SearchList = ({ onSearch }) => {
    const [searchInput, setSearchInput] = useState('');
    const handleSearchClick = () => {
        onSearch(searchInput); // Gửi từ khóa về component cha
    };

    return (
        <div className='searchlist'>
            <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}

            />
            <button className="search" type="button"
                onClick={handleSearchClick}>Search</button>
        </div>
    )
}

export default SearchList
