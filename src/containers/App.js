import { Provider } from 'react-redux';
import MainLayout from '../layouts/MainLayout';
import Users from './Users';
import store from '../redux/store';

const App = () => (
  <Provider store={store}>
    <MainLayout>
      <Users/>
    </MainLayout>
  </Provider>
)

export default App
