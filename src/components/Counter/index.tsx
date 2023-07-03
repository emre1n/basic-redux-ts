import { useSelector } from 'react-redux';
import styles from './styles.module.css';

import { CounterState } from '../../libs/types';

const Counter = () => {
  const counter = useSelector((state: CounterState) => state.counter);

  const toggleCounterHandler = () => {
    console.log('toggled');
  };

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
      <div className={styles.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
