import { Provider } from 'react-redux';
import AppRouter from '../router/index';
import store from '../redux/store';

const App = () => (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

export default App
