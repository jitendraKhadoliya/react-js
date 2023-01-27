// step 5 => we have to import the createSlice api from redux Toolkit and
// creating slice required the value
// 1. name to identify the which slice it is
// 2. initial state value
// 3. minimum one reducer function to define it


// step 6 => now we will create reducer function to map
// step 7 => we will export the reducer function by destructing from the "object we created inside the reducer" 
// step 8 => we will export it all function

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0,
  }

export const counterSlice = createSlice({
  // 1. name to identify the which slice it is
  name: "counter",
  // 2. initial state value
  initialState,

  // 3. minimum one reducer function to define it, here I am going to create reducer function for increment and decrement
  reducers: {
    increment:(state)=>{
        state.value +=  1;
    },
    decrement: (state)=>{
        state.value -= 1;
    }
  },
});

// step 7 => we will export the reducer function by destructing from the "object we created inside the reducer" 
export const {increment,decrement} = counterSlice.reducer;

// step 8 => we will export it all function
export default counterSlice.reducer;
