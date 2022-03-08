import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
name : "cartModal",
initialState : {
cartModalIsvisible : false
},
reducers: {
    cartShowHandler(state, action){
        state.cartModalIsvisible = !state.cartModalIsvisible
    }
}
});
export const cartAction = cartSlice.actions;
export default cartSlice;