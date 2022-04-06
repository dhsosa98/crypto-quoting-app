// create redux toolkit store
import { configureStore } from "@reduxjs/toolkit";
import coins from "../features/coinsSlice";
////

const store = configureStore({
    reducer: {
        coins
    },
});
export type RootState = ReturnType<typeof store.getState>

export default store;