import { createSlice } from "@reduxjs/toolkit";

const pipeSlice = createSlice({
    name: 'pipe',
    initialState: {
        pipeWidth: 30, // значение указано в %; на мобилке - 50%; на ноуте - 40%; на компе - 30%;
        pipeQuantity: 10, // базовое значение -- 6
    },
    reducers: {
        changePipeWidth: (state, actions) => (state.pipeWidth = actions.payload),
        changePipeQuantity: (state, actions) => (state.pipeQuantity = actions.payload)
    }
})

export const { changePipeWidth, changePipeQuantity } = pipeSlice.actions;
export default pipeSlice.reducer;