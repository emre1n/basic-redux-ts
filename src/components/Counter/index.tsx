import styles from './styles.module.css';

const Counter = () => {
  const toggleCounterHandler = () => {
    console.log('toggled');
  };

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
      <div className={styles.value}>-- COUNTER VALUE --</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
