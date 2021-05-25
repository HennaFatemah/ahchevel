import React, { Component } from 'react';
import './SortAndFilter.scss';
import {filterProducts, sortProducts} from '../../actions/productActions';
import {connect} from 'react-redux';

class SortAndFilter extends Component {
    render() {
        const { sort, products, filterProducts, category, filteredProducts, sortProducts } = this.props;
        return (
            !filteredProducts?
                <div>Loading...</div>:

            <div className="sort-filter">
                <p className="sort-filter__title sort-filter__title--count">{filteredProducts.length} Jewelries</p>
                <div className="sort-filter__sort">
                    <p className="sort-filter__title">Sort By Price</p>
                    <select 
                        value={sort} 
                        onChange={(e)=>sortProducts(filteredProducts, e.target.value)}
                        className="sort-filter__select"
                    >
                        <option value="latest">Default</option>
                        <option value="highest">Highest</option>
                        <option value="lowest">Lowest</option>
                    </select>
                </div>
                <div className="sort-filter__filter">
                    <p className="sort-filter__title">Filters</p>
                    <select 
                        value={category} 
                        onChange={(e)=>filterProducts(products, e.target.value)}
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

export default connect((state) => ({
    category: state.products.category,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems
}), {
    //second parameter for mapping actions
    filterProducts,
    sortProducts
})(SortAndFilter);