import {createStore} from 'redux';

import rootReducer from './ducks';

//cria o store do redux com os reducers unidos vindo do ducks
export default createStore(rootReducer);
