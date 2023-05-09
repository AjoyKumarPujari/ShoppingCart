import { configureStore } from "@reduxjs/toolkit";
import {CartSlice} from "./Slices/CartSlice";
///import CounterSlice from './Slices/CounterSlice'

export const store = configureStore({//global store
  reducer: {
    //counter : CounterSlice
    //KEY //slicefile name
    cart: CartSlice.reducer,
  }
});

