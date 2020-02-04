import { all, takeLatest } from 'redux-saga/effects';
import { Types as BolosTypes } from './bolos/index';
import { insert as BolosInsert, load as BolosLoad } from './bolos/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(BolosTypes.LOAD_REQUEST, BolosLoad),
    takeLatest(BolosTypes.ADD_SUCCESS, BolosInsert),
  ]);
}
