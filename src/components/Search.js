import React from 'react';

const Search = ({ value, handleChange, handleKeyPress }) => {
  return (
    <div className="search">
      <input
        className="search_input"
        type="text"
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default Search;
