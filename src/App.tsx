import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'

import Routes from './views/route/Routes'
// import { configureStore } from './redux/store'

// const store = configureStore()

import {store} from './redux/store'


const App :React.FC = () =>{
  return(
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  )
}

export default App;
