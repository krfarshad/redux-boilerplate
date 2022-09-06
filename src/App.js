import './App.css';
import { Provider } from 'react-redux';
import rootReducer from './redux/rootReducers';
import configureStore from './redux/configureStore';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
function App() {
  const store = configureStore(rootReducer)
  return (
    <Provider store={store}>
        <Header />
        <Main />
        <Footer />
    </Provider>
  );
}

export default App;
