import React from 'react';

const Select = ({ options, value, handleChange }) => {
  return (
    <select value={value} onChange={handleChange}>
      {options.map((option) => {
        return (
          <option value={option} key={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
