// I have created the store inside the redux directory

// step 1 => configuring store from redux toolkit it will create the redux store and automitically configure inside the Redux Dev Tools, so we can inspect it

// step 2 => we created and exported the store inside this store we configured it and create reduced inside it

// step 3 => Now we will give provider and store data to our index.js file so we can get the store data inside all our components

// step 9 => Add slice reducer to the store ,for that we have to import it 

// step 10 => use the redux state and action in our react component


import counterReducer from './counterSlice';

import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer : {
        counter : counterReducer,
    },
})



