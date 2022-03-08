import { createSlice } from "@reduxjs/toolkit";

const uiSliceNoti = createSlice({
    name : "showNotification",
    initialState : {
        notification : null,
    },
    reducers : {
        showNotification(state, action){
            state.notification = {
                status : action.payload.status,
                title : action.payload.title,
                message : action.payload.title
            }
           
        }
    }
});
export const uiSliceNotiAction =  uiSliceNoti.actions;
export default uiSliceNoti;
