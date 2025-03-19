import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
    name: 'gemini',
    initialState: {
        toggleSwitch: false
    },
    reducers: {
        addToggleSwitch: (state) => { state.toggleSwitch = !state.toggleSwitch }
    }

})

export const { addToggleSwitch } = geminiSlice.actions;
export default geminiSlice.reducer;