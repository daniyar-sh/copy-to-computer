import 'antd/dist/antd.css'
import './App.css';
import configureStore from './store';
import { Provider } from 'react-redux';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Signup from './containers/signup';
import Signin from './containers/signin';
import setAuthToken from './helpers/setAuthToken';
import jwt_decode from 'jwt-decode'
import * as types from './actions/types'
import Dashboard from './containers/dashboard';
import Kitchen from './containers/kitchen';
import Restaurant from './containers/restaurant';
import Main from './containers/main/main';
import Header from './containers/haeder/Header';
import Search from './containers/main/navbar/search';
import Stock from './containers/main/navbar/stock';

const store = configureStore();

if(localStorage.token) {

  setAuthToken(localStorage.token)
  const decoded = jwt_decode(localStorage.token)
  store.dispatch({type: types.SET_CURRENT_USER, payload: decoded})
  const currentTime = Date.now()/1000 
  if(decoded.exp < currentTime) {
    localStorage.removeItem('token')
    setAuthToken(false)
    store.dispatch({type: types.SET_CURRENT_USER, payload: {}})
    window.location.reload()
  }
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Header/>
      
        <Routes>
          <Route element={<Main/>} path='*'/>
          <Route element={<Search/>} path='/search'/>
          <Route element={<Stock/>} path='/stock'/>
          <Route element={<Signup/>} path="signup"/>
          <Route element={<Signin/>} path="signin"/>
          
          <Route path='dashboard' element={<Dashboard/>}>
            <Route path='kitchens' element={<Kitchen/>}/>
            <Route path='restaurants' element={<Restaurant/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
