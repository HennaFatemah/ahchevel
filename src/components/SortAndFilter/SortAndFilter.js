import React, { Component } from 'react';
import './SortAndFilter.scss';

class SortAndFilter extends Component {
    render() {
        const { count, sort, category, filterProducts, sortProducts } = this.props;
        return (
            <div className="sort-filter">
                <p className="sort-filter__title">{count} Jewelries</p>
                <div className="sort-filter__sort">
                    <p className="sort-filter__title">Sort By Price</p>
                    <select 
                        value={sort} 
                        onChange={sortProducts}
                        className="sort-filter__select"
                    >
                        <option>Default</option>
                        <option value="highest">Highest</option>
                        <option value="lowest">Lowest</option>
                    </select>
                </div>
                <div className="sort-filter__filter">
                    <p className="sort-filter__title">Filters</p>
                    <select 
                        value={category} 
                        onChange={filterProducts}
                        className="sort-filter__select"
                    >
                        <option value="">All</option>
                        <option value="earrings">Earrings</option>
                        <option value="rings">Rings</option>
                        <option value="bracelet">Bracelets</option>
                        <option value="sets">Sets</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default SortAndFilter;