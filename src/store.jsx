import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./components/features/counter/CounterSlice";

const store = configureStore({
    reducer: counterReducer
})

export default store