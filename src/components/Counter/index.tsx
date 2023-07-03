import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../../store';

import styles from './styles.module.css';

import { RootState } from '../../libs/types';

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state: RootState) => state.counter.counter);
  const showCounter = useSelector(
    (state: RootState) => state.counter.showCounter
  );

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleIncrease = () => {
    dispatch(counterActions.increase(5));
    // { type: SOME_UNIQUE_IDENTIFIER, payload: 5}
    // payload is default
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={styles.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrease}>Increase by 5</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
