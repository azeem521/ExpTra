import { createSlice } from "@reduxjs/toolkit";


const initialExpState={
    items:[],

};

const ExpSlice=createSlice({
    name:'Expense',
    initialState:initialExpState,
    reducers:{
        addItemHandler(state,action){
            console.log(action.payload,'action.payload');
            state.items=[...state.items,action.payload];
            console.log(state.items,'state.items00');
        },
        deleteItemHandler(state,action){
            const remainingItem=state.items.filter((e)=>e.id!==action.payload);
            state.items=remainingItem
                },
                editHandler(state,action){
                // const {id,updatedItem}=action.payload;
                const index=state.items.findIndex((e) => e.id === action.payload.id);
                console.log(action.payload,'inTheEdit');
                // if (index !== -1) {
                    state.items[index] = action.payload.updated;
                //   }
                  console.log(state.items);
                }
    },
    
  
});

export const expAction=ExpSlice.actions;
export default ExpSlice.reducer;