import { createStore } from 'redux';
import { CounterState } from '../libs/types';

const initialState: CounterState = { counter: 0 };

const counterReducer = (
  state: CounterState = initialState,
  action: { type: string }
) => {
  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1 };
    case 'DECREMENT':
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
