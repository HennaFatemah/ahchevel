import React, { Component } from 'react';
import './SortAndFilter.scss';

class SortAndFilter extends Component {
    render() {
        return (
            <div className="sort-filter">
                <p className="sort-filter__count">{this.props.count} Jewelries</p>
                <div className="sort-filter__sort">
                    <p className="sort-filter__title">Sort By Price</p>
                    <select>
                        <option>Default</option>
                        <option value="highest">Highest</option>
                        <option value="lowest">Lowest</option>
                    </select>
                </div>
                <div className="sort-filter__filter">
                    <p className="sort-filter__title">Filters</p>
                    <select>
                        <option>All</option>
                        <option value="earrings">Earrings</option>
                        <option value="rings">Rings</option>
                        <option value="bracelets">Bracelets</option>
                        <option value="sets">Sets</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default SortAndFilter;