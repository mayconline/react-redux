import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Lista from './Pages/Lista';
import FormList from './Pages/FormLista';



export default function Routes(){
    return(  
        <Switch>
            <Route path='/' exact component={Lista}/>
            <Route path='/cadastro' exact component={FormList}/>
        </Switch>
    )
}