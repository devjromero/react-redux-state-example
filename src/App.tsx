
import { Provider } from 'react-redux';
import { AppRouter } from './AppRouter';
import store from './config/redux/store';
import startI18nConfig from './config/i18n/i18n.config';

const App = () => {
  
  startI18nConfig();
  
  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  );
}

export default App;
