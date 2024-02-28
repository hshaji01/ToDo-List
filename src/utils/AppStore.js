import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

const AppStore = configureStore({
    reducer: {
        todo: todoReducer
    }
    
})

export default AppStore;

