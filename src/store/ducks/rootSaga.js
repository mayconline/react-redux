import {all, takeLatest } from 'redux-saga/effects';

import {Types as BolosTypes} from './bolos/index';
import {load as BolosLoad} from './bolos/sagas';

export default function* rootSaga(){
    return yield all([
        takeLatest(BolosTypes.LOAD_REQUEST, BolosLoad)
    ])
}