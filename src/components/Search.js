import React from 'react';

const Search = ({ value, handleChange, handleKeyPress }) => {
  return (
    <div className="search">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default Search;
