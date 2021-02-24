import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";

function productListReducer(state= {products: []}, actions){

    switch (actions.type) {
        case PRODUCT_LIST_REQUEST:
            return {loading: true};
        case PRODUCT_LIST_SUCCESS:
            return {loading: false, products: actions.payload};
        case PRODUCT_LIST_FAIL:
            return {loading: false, error: actions.payload};
        default:
            return state;
    }
}

function productDetailsReducer(state= {product: {}}, actions){

    switch (actions.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {loading: true};
        case PRODUCT_DETAILS_SUCCESS:
            return {loading: false, product: actions.payload};
        case PRODUCT_DETAILS_FAIL:
            return {loading: false, error: actions.payload};
        default:
            return state;
    }
}

export { productListReducer, productDetailsReducer }