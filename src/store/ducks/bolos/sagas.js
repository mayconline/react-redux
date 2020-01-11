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


export function* insert(action){

    //recebe uma action com o objeto do formulario
  const {product} = action
    try{
       const response = yield call(api.post,'/products/store', product)
        
       //caso de ok na requisição, chama o loadRequest para atualizar a lista com novo produto
        if(response.status===200) {
        yield put(BolosActions.loadRequest())
      } 

    }
    catch(err){
     
        yield put(BolosActions.loadFailure())
    }
}