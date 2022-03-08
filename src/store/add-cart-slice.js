
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk('item/fetchItems',
async () =>{
        const response =  await fetch("https://tripura-ad31b-default-rtdb.firebaseio.com/cart.json");
        const data = await response.json();
        return data;
}

);

export const sendItem = createAsyncThunk("send/sendItem",
   async ()=>{
       console.log("hello")
    const response = await fetch("https://tripura-ad31b-default-rtdb.firebaseio.com/cart.json",{
        method : "PUT",
        body : JSON.stringify({
            items : cart.items,
            totalQuantity : cart.totalQuantity
        })
    });
}
)


const addItemToCartSlice = createSlice({
    name : "addItemToCart",
    initialState :{
        items : [],
        totalQuantity : 0,
        totalPrice : 0,
        changed : false, 
        notification : null,     
    },
    extraReducers : {   
        [fetchItems.rejected] : (state) =>{
            state.notification = {
                status : "error",
                title :  "Error!",
                message : "Fetching cart data failed!"
            }
        },
        // send items
        [sendItem.pending] : (state) =>{
            state.notification = {
                status: "Pending...",
                title: "Sending...",
                message: "Sending cart data!",
            }
        },
        [sendItem.fulfilled] : (state, action) =>{
            state.notification = {
                status: "success",
                title: "Success!",
                message: "Sent cart data successfully!",
            }
        },
        [sendItem.rejected] : (state) =>{
            state.notification = {
                status : "error",
                title :  "Error!",
                message : "Fetching cart data failed!"
            }
        }
    },
    reducers : {
        showNotification(state, action){
            state.notification = {
                status : action.payload.status,
                title : action.payload.title,
                message : action.payload.title
            }
           
        },
        replaceCart(state, action){
            state.items = action.payload.items;
            state.totalQuantity = action.payload.totalQuantity;
        },
        addItemToCart(state, action){
           const  newItem = action.payload;
           const existingItem = state.items.find((item) => item.id === newItem.id);
          state.changed = true;
           if(!existingItem){
            state.items.push({
                id : newItem.id,
                price : newItem.productPrice,
                name : newItem.name,
                srcImg : newItem.srcImg,
                quantity : newItem.quantity,
                netQuantity : newItem.netQuantityValue,
            });

            // let allProductsSinglequnTotalPrice;
            // let totalPriceByQuantity;

            state.totalPrice = newItem.productPrice * newItem.quantity;

            if(newItem.quantity > 1){
                console.log("newItem.quantity > 1");
                state.totalPrice = newItem.productPrice * newItem.price;
                console.log(newItem.price);
            }    
            console.log(state.totalPrice);
           } else{
               existingItem.quantity++;
               state.totalPrice = (state.totalPrice) + (newItem.productPrice);
           }
           state.totalQuantity = state.items.length;
        
        },
        removeItemFromCart(state,action){
            const id  = action.payload;
           const existingItem = state.items.find(item => item.id === id);
          state.changed = true;
           if(parseInt(existingItem.quantity) === 1){
               state.items = state.items.filter(item => item.id !== id);
               state.totalPrice = state.totalPrice - existingItem.price;
           }else{
                existingItem.quantity--;
               state.totalPrice = state.totalPrice - existingItem.price;
        
           }
           state.totalQuantity = state.items.length;
        }, 
        removeItemQuickly(state, action){
            const id = action.payload;
            state.changed = true;
            state.items = state.items.filter(item => item.id !== id);
            state.totalQuantity = state.items.length;
        }

    },
  
   
});

export const addItemToCartActions = addItemToCartSlice.actions;
export default addItemToCartSlice;