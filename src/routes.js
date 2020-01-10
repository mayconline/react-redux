import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Lista from './Pages/Lista';
import FormList from './Pages/FormLista';
import BolosLista from './Pages/BolosLista';
import FormBolos from './Pages/FormBolos';



export default function Routes(){
    return(  
        <Switch>
            <Route path='/' exact component={BolosLista}/>
            <Route path='/cadastro' exact component={FormList}/>
            <Route path='/formbolos' exact component={FormBolos}/>
            <Route path='/boloslista' exact component={Lista}/>
        </Switch>
    )
}