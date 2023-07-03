import { useSelector } from 'react-redux';

import Counter from './components/Counter/';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

import { RootState } from './libs/types';

function App() {
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {isAuth ? <UserProfile /> : <Auth />}
      <Counter />
    </>
  );
}

export default App;
