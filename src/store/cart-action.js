import { addItemToCartActions } from "./add-cart-slice";
import { uiSliceNotiAction } from "./ui-slice";

export const fetchCartData =  () =>{
    return async (dispatch) =>{
      
        const fetchData = async () =>{
            const response = await fetch("https://tripura-ad31b-default-rtdb.firebaseio.com/cart.json");

            if(!response.ok){
                throw new Error("somthing went wrong");
            }
            const data = response.json();
            return data;
        }
        try{
           const cartData = await fetchData();
           dispatch(
               addItemToCartActions.replaceCart({
               items : cartData.items || [],
               totalQuantity : cartData.totalQuantity
           })
           );
        }catch(error){
            dispatch(uiSliceNotiAction.showNotification({
                status : "error",
                title : "Error!",
                message : "Fetching cart data failed!"
            }))
        }
    }
}


export const sendCartData =  (cart) =>{
return async (dispatch) =>{

   dispatch(uiSliceNotiAction.showNotification({
    status: "Pending...",
    title: "Sending...",
    message: "Sending cart data!",
   }))

    const sendRequest = async () =>{
        const response = await fetch("https://tripura-ad31b-default-rtdb.firebaseio.com/cart.json",
        {
            method : "PUT",
            body : JSON.stringify({
                 items : cart.items,
                 totalQuantity : cart.totalQuantity
             })
        }
         )
         if(!response.ok){
             throw new Error("Somthing went wrong")
         }
    }
    try{
        await sendRequest();
        dispatch(uiSliceNotiAction.showNotification({
            status: "success",
            title: "Success!",
            message: "Sent cart data successfully!",
        }))
    } catch(error){
    dispatch(uiSliceNotiAction.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!',
    }))
    }
   
}
}