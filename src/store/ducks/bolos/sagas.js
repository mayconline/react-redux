import {call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import {Creators as BolosActions} from './index';

export function* load(){

    try {
        
        const response = yield call(api.get, '/bolos')
        
        yield put(BolosActions.loadSuccess(response.data))
    }
    catch(err){
        yield put(BolosActions.loadFailure())
        
    }
}