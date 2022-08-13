import { ActionTypes } from "../constants/Actiontypes";
const initialState={
    products:[]
}
export const productReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload}
            break;
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state
    }
}
export const selected_products=(state={},{type,payload})=>{
    switch(type){
        case ActionTypes.SELECTED_PRODUCTS:
            return {
                ...state,...payload
            }
            break;
        default:
            return state
    }
}
