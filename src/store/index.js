import { configureStore } from '@reduxjs/toolkit';
import birdReducer from './slices/birdSlice';
import gameSlice from './slices/gameSlice';
import pipeSlice from './slices/pipeSlice';

const store = configureStore({
    reducer: {
        game: gameSlice,
        bird: birdReducer,
        pipe: pipeSlice
    }
});

export default store;