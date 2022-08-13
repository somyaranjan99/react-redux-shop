import {ActionTypes} from '../constants/Actiontypes'
export const setProducts=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}
export const selected_products=(products)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCTS,
        payload:products
    }
}
export const removeProducts=()=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}