import { createSlice, PayloadAction, configureStore } from '@reduxjs/toolkit';
import { CounterState, AuthState } from '../libs/types';

const initialCounterState: CounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
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

const initialAuthState: AuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login: state => {
      state.isAuthenticated = true;
    },
    logout: state => {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
