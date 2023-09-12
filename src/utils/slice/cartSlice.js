import {createSlice} from "@reduxjs/toolkit"
const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{                // this state is the previous state and the action is the Payload passed while dispathcing the action
              state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
          state.items.pop();   // do not retrun anything 
        },
        clearCart:(state)=>{
             state.items=[]
        }
    }
})
export default cartSlice.reducer;
export const {addItem,removeItem,clearCart} = cartSlice.actions;    