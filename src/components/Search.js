import React from 'react';
import '../style/Search.css'
const Search = () => {
  return (
    <div className="Search">
      <input type="search" className="Search__input" />
      <button className="Search__button">Search</button>
    </div>
  );
};

export default Search;
