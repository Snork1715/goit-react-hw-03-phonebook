import React from 'react';
import './Filter.css';

const Filter = ({ value, onChange }) => {
    return (
        <label>
            Поиск контактов:
            <input
                type="text"
                placeholder="Введите имя для поиска"
                name="filter"
                value={value}
                onChange={onChange}
                className="filter-input"
            />
        </label>
    );
};

export default Filter;
