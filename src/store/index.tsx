import { createSlice, PayloadAction, configureStore } from '@reduxjs/toolkit';
import { CounterState, CounterAction } from '../libs/types';

const initialState: CounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.counter++;
    },
    decrement: state => {
      state.counter--;
    },
    increase: (state, action: PayloadAction<number>) => {
      state.counter = state.counter + action.payload;
    },
    toggleCounter: state => {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
