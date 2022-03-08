import { createSlice } from "@reduxjs/toolkit";

const homeProductsListSlice = createSlice({
    name : "home-products-list",
    initialState : {
        homeProductDetails : undefined
    },
    reducers : {
        homeProductsListHandler(state, action){
            state.homeProductDetails = action.payload;
        }
    }
})
export const homeProductsListAction = homeProductsListSlice.actions;
export default homeProductsListSlice;