import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filter, onFilter }) => {
  return (
    <div>
      <label htmlFor="filter">
        <input
          name="filter"
          type="text"
          onChange={onFilter}
          value={filter}
        ></input>
      </label>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired, // рядок
  onFilter: PropTypes.func.isRequired, // функція
};
