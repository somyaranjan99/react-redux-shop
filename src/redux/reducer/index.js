import { combineReducers } from "redux";
import {productReducer,selected_products} from "./productReducer";

const reducer=combineReducers({
    allproducts:productReducer,
    productdetails:selected_products
})
export default reducer;