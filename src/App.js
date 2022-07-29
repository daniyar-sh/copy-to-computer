import 'antd/dist/antd.css'
import './App.css';
import configureStore from './store';
import { Provider } from 'react-redux';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Signap from './containers/signap/signap';


const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Signap/>} path="signup"/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
