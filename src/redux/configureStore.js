import { configureStore } from "@reduxjs/toolkit";
import greetingReducer from "./greetingReducer";

const store = configureStore({
    reducer: {
        greetings: greetingReducer
    }
})
export default store;