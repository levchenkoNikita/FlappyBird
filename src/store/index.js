import { configureStore } from '@reduxjs/toolkit';
import birdReducer from './slices/birdSlice';
import gameSlice from './slices/gameSlice';

const store = configureStore({
    reducer: {
        game: gameSlice,
        bird: birdReducer,
        
    }
});

export default store;