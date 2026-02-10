// src/components/SearchBar/SearchBar.jsx
import React from 'react';
import './SearchBar.css'; // Create this file for styling if you haven't

function SearchBar({ setSearchTerm }) {
  return (
    <div className="search-box">
      <input 
        type="text" 
        placeholder="Search Movies..." 
        className="search-input"
        // Every time the user types, we update the state in App.jsx
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
    </div>
  );
}

export default SearchBar;
