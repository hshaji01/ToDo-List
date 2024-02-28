import { Provider } from 'react-redux';
import './App.css';
import Header from  "./component/Header";
import MainContent from './component/MainContent';
import AppStore from './utils/AppStore';

function App() {
  return (
    <Provider store={AppStore}>
      <div className="App">
        <Header />
        <MainContent />
      </div>
    </Provider>
  );
}

export default App;
