import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        speed: 4,
        screenWidth: window.innerWidth,
    },
    reducers: {
        changeSpeed: (state, actions) => {state.speed = actions.payload},
        changeScreenWidth: (state, actions) => {state.screenWidth = actions.payload}
    }
})

export const { changeSpeed, changeScreenWidth } = gameSlice.actions;
export default gameSlice.reducer;