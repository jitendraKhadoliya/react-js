import {createReducer} from '@reduxjs/toolkit';



// first object for the initial state 


const initialstate = {
    count : 0,
};

export const customReducer = createReducer(initialstate,{

    INC : (state) =>{
        state.count = state.count + 1;
    },
    incByValue : (state,action)=>{
        // state.count = state.count +1;
        state.count = state.count + action.payload;
    },
    DEC :(state)=>{
        state.count = state.count - 1;
    }
})