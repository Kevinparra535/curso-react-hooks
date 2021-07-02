import React from 'react';

const Search = ({search, searchInput, handleSearch}) => {
  return (
    <div>
    <label>
      Búsqueda:
      <input
        name="search"
        type="text"
        value={search}
        ref={searchInput}
        onChange={handleSearch}
      ></input>
    </label>
  </div>
  );
}

export default Search;