import { createSlice } from '@reduxjs/toolkit';

const birdSlice = createSlice({
    name: 'bird',
    initialState: {
        width: 32,
        height: 16,
        velosity: 4,
        collisionX: 34,
        collisionY: 18
    },
    reducers: {
        changeWidth: (state, actions) => (state.width = actions.payload),
        changeHeight: (state, actions) => (state.height = actions.payload),
        changeVelosity: (state, actions) => (state.velosity = actions.payload),
        changeCollisionX: (state, actions) => (state.collisionX = actions.payload),
        changeCollisionY: (state, actions) => (state.collisionY = actions.payload)
    }
})

export const { changeWidth, changeHeight, changeVelosity, changeCollisionX, changeCollisionY } = birdSlice.actions;
export default birdSlice.reducer;
