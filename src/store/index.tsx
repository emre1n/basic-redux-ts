import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counter.store';
import authSlice from './slices/auth.store';

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
