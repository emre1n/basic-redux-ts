import styles from './styles.module.css';

const Auth = () => {
  return (
    <main className={styles.auth}>
      <section>
        <form>
          <div className={styles.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" autoComplete="username" />
          </div>
          <div className={styles.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
