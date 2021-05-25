import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_CATEGORY, SORT_PRODUCTS_BY_PRICE } from '../types';

export const fetchProducts = () => async(dispatch) => {
    const res = await fetch("api/products");
    const data = await res.json();
    console.log(data);
    dispatch({
        type: FETCH_PRODUCTS,
        payload: data,
    })
}

export const filterProducts = (products, category) => (dispatch) => {
    dispatch({
        type: FILTER_PRODUCTS_BY_CATEGORY,
        payload: {
            category: category,
            items: 
                category === ""
                    ? products 
                    : category === "bracelet" ?
                    products.filter(items =>items.category === "bracelet") :
                    category === "earrings" ?
                    products.filter(items =>items.category === "earrings") :
                    category === "rings" ?
                    products.filter(items =>items.category === "rings") :
                    category === "sets" ?
                    products.filter(items =>items.category === "sets") :
                    null
        }
    })
}

export const sortProducts = (filteredProducts, sort) => async (dispatch) => {
    const sortedProducts = filteredProducts.slice();
    if (sort === "latest") {
        sortedProducts.sort((a, b) => (a.id > b.id ? 1 : -1));
    } else {
        sortedProducts.sort((a, b) =>
            sort === "lowest"
                ? a.price > b.price
                    ? 1
                    : -1
                : a.price > b.price
                    ? -1
                    : 1
        );
    }
    console.log("sortedProducts", sortedProducts);
    dispatch({
        type: SORT_PRODUCTS_BY_PRICE,
        payload: {
            sort: sort,
            items: sortedProducts
        }
    })
}