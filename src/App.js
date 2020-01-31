import React from 'react';
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom';


import {Provider} from 'react-redux';
import store from './store';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Alertas from './Component/Alertas';

function App() {
  return (
    //provider com o store do redux 
    <Provider store={store}>
        <BrowserRouter>
          <ToastContainer autoClose={3000} />        
          <Alertas/>
          <Routes/>  
        </BrowserRouter>

    </Provider>
   
  );
}

export default App;
