import { useDispatch } from 'react-redux';

import styles from './styles.module.css';
import { authActions } from '../../store';

const Auth = () => {
  const dispatch = useDispatch();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(authActions.login());
  };

  return (
    <main className={styles.auth}>
      <section>
        <form onSubmit={handleLogin}>
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
