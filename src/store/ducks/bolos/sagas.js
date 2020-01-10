import {call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import {Creators as BolosActions} from './index';



export function* load(){

    try {
        
        const response = yield call(api.get, '/products')
      
        
        yield put(BolosActions.loadSuccess(response.data))
    }
    catch(err){
       
        yield put(BolosActions.loadFailure())
        
    }
}


export function* insert(BolosActions){

    const {asyncObj} = BolosActions.addSuccess
    console.log(asyncObj)
   
    try{
        const response = yield call(api.post,'/products/store', asyncObj)
        if(response === true) {
            yield put(BolosActions.loadRequest())
        }

    }
    catch(err){
        yield put(BolosActions.loadFailure())
    }
}