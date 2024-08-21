// src/components/SearchBar.js
import React from 'react';
// import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-bar"style={{marginLeft: '25px'}}>
      <input type="text" placeholder="Search" />
    </div>
  );
}

export default SearchBar;
