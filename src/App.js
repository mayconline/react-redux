import React from 'react';
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store';

import Alertas from './Component/Alertas';

function App() {
  return (
    //provider com o store do redux 
    <Provider store={store}>
        <BrowserRouter>        
          <Alertas/>
          <Routes/>  
        </BrowserRouter>

    </Provider>
   
  );
}

export default App;
