import {combineReducers} from 'redux';

import produtos from './produtos';
import mensagem from './mensagem';
import bolos from './bolos';

//une os reducer
export default combineReducers({
    produtos,
    mensagem,
    bolos
})