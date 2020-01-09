import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Lista from './Pages/Lista';
import FormList from './Pages/FormLista';
import BolosLista from './Pages/BolosLista';



export default function Routes(){
    return(  
        <Switch>
            <Route path='/' exact component={BolosLista}/>
            <Route path='/cadastro' exact component={FormList}/>
            <Route path='/boloslista' exact component={Lista}/>
        </Switch>
    )
}