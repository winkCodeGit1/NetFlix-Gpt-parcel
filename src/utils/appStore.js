import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import languageReducer from "./languageSlice";
import geminiReducer from "./geminiSlice";

const appStore = configureStore(
    {
        reducer: {
            user: useReducer,
            movies: moviesReducer,
            gpt: gptReducer,
            language: languageReducer,
            gemini: geminiReducer
        }
    }
);

export default appStore;