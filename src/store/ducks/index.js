import {combineReducers} from 'redux';

import produtos from './produtos';
import mensagem from './mensagem';

//une os reducer
export default combineReducers({
    produtos,
    mensagem
})