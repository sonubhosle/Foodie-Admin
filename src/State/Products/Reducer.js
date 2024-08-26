import { GET_ALL_PRODUCTS_FAILURE, GET_ALL_PRODUCTS_SUCCESS, GET_ALL_PRODUCTS_REQUEST, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, DELETE_PRODUCTS_SUCCESS } from './Types'


const initialSate = {
    products: [],
    product: null,
    loading: false,
    error: null
}

export const productReducer = (state = initialSate, action) => {

    switch (action.type) {
        case GET_ALL_PRODUCTS_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
            return { ...state, loading: true, error: null }
        case GET_ALL_PRODUCTS_SUCCESS:
            return { ...state, loading: false, error: null, products: action.payload }
        case FIND_PRODUCT_BY_ID_SUCCESS:
            return { ...state, loading: false, error: null, product: action.payload }
        case DELETE_PRODUCTS_SUCCESS:
            return { ...state, loading: false, error: null, deletedProduct: action.payload }
        case GET_ALL_PRODUCTS_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
            return { ...state, loading: false, error: action.payload }

        default:
            return state;
    }


}

