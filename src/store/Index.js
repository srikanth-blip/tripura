import { configureStore } from "@reduxjs/toolkit";
import addItemToCartSlice from "./add-cart-slice";
import cartSlice from "./cart-slice";
 import homeProductsListSlice from "./home-products-list-slice";
import uiSliceNoti from "./ui-slice";

const store = configureStore({
    reducer: {
        cartModal : cartSlice.reducer,
        homeProductsList : homeProductsListSlice.reducer,
        addItemToCart : addItemToCartSlice.reducer,
        uiNoti : uiSliceNoti.reducer       
    }
 })
export default store;