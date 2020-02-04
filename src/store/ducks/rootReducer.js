import { combineReducers } from 'redux';
import bolos from './bolos';
import mensagem from './mensagem';
import produtos from './produtos';

// une os reducer
export default combineReducers({
  produtos,
  mensagem,
  bolos,
});
