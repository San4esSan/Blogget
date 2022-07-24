import Header from './components/Header';
import Main from './components/Main';
import {useToken} from './hoocks/useToken';

function App() {
  const [token] = useToken('');

  return (
    <>
      <Header token={token} />
      <Main />
    </>
  );
}

export default App;
