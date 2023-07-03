import { createStore } from 'redux';
import { CounterState, CounterAction } from '../libs/types';

const initialState: CounterState = { counter: 0 };

const counterReducer = (
  state: CounterState = initialState,
  action: CounterAction
) => {
  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1 };
    case 'INCREASE':
      return { counter: state.counter + action.amount };
    case 'DECREMENT':
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
