import React, { useState, useEffect } from 'react';

const SearchBar = ({searchTerm, onSearchChange}) => {
    return ( 
        <input
        type='text'
        placeholder='Search here'
        value={searchTerm}
        onChange={onSearchChange}
        />
     );
}
export default SearchBar;
