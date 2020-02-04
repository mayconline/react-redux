import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BolosLista from './Pages/BolosLista';
import FormBolos from './Pages/FormBolos';
import FormList from './Pages/FormLista';
import Lista from './Pages/Lista';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={BolosLista} />
      <Route path="/cadastro" exact component={FormList} />
      <Route path="/formbolos" exact component={FormBolos} />
      <Route path="/boloslista" exact component={Lista} />
    </Switch>
  );
}
