import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "language",
    initialState: {
        code: "en"
    },
    reducers: {
        addCodeLang: (state, action) => { state.code = action.payload },
    }
})

export const { addCodeLang } = languageSlice.actions;
export default languageSlice.reducer;