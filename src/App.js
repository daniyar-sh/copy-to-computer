import 'antd/dist/antd.css'
import './App.css';
import configureStore from './store';
import { Provider } from 'react-redux';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Signup from './containers/signap/signap';
import SignIn from './containers/sigin/signIn';
import setAuthToken from './helpers/serAuthToken';
import jwt_decode from 'jwt-decode'
import * as types from './actions/types'
import Header from './containers/haeder/Header';
import Main from './Pages/main';
import Dashboard from './Pages/dashboard/dashboard';
import Kitchen from './Pages/dashboard/kitchen/kitchen';
import Restaurant from './Pages/dashboard/restaurant/restaurant';

const store = configureStore();

if(localStorage.token) {

  setAuthToken(localStorage.token)
  const decoded = jwt_decode(localStorage.token)
  store.dispatch({type: types.SIGN_CURRENT_USER, payload: decoded})
  const currentTime = Date.now()/1000
  if(decoded.exp < currentTime) {
    localStorage.removeItem('token')
    setAuthToken(false)
    store.dispatch({type: types.SIGN_CURRENT_USER, payload: {}})
    window.location.reload()
  }
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route element={<Main/>} path=''/>
          <Route element={<Signup/>} path="signup"/>
          <Route element={<SignIn/>} path="signin"/>
          <Route path='dashboard' element={<Dashboard/>}>
            <Route path='restaurant' element={<Restaurant/>}/>
            <Route path='kitchens' element={<Kitchen/>} />
          </Route>
        </Routes>
        
      </BrowserRouter>
    </Provider>
  );
}

export default App;
