import { useSelector, useDispatch } from 'react-redux';
import styles from './styles.module.css';

import { CounterState } from '../../libs/types';

const Counter = () => {
  const counter = useSelector((state: CounterState) => state.counter);
  const showCounter = useSelector((state: CounterState) => state.showCounter);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleIncrease = () => {
    dispatch({ type: 'INCREASE', amount: 5 });
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: 'TOGGLE' });
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
