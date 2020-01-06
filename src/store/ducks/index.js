import {combineReducers} from 'redux';

import produtos from './produtos';
import mensagem from './mensagem';


export default combineReducers({
    produtos,
    mensagem
})