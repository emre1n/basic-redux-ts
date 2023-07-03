import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CounterState, CounterAction } from '../libs/types';

const initialState: CounterState = { counter: 0, showCounter: true };

createSlice({
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

const counterReducer = (
  state: CounterState = initialState,
  action: CounterAction
) => {
  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1, showCounter: state.showCounter };
    case 'INCREASE':
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };
    case 'DECREMENT':
      return { counter: state.counter - 1, showCounter: state.showCounter };
    case 'TOGGLE':
      return { counter: state.counter, showCounter: !state.showCounter };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
