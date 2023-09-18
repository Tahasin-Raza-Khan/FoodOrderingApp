import { createSlice } from "@reduxjs/toolkit"
const cartSlice = createSlice({
     name: 'cart',
     initialState:{
        items:[]
     },
     reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearAll:(state)=>{
            state.items.length=0;
        }
     }

})

export const {addItem, removeItem,clearAll} =cartSlice.actions;
export default cartSlice.reducer;