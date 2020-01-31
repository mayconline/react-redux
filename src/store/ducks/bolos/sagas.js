import {call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import {toast} from 'react-toastify';

import {Creators as BolosActions} from './index';


export function* load(){

    try {
        
        const response = yield call(api.get, '/products')
      
            toast.success('Lista Carregada com Sucesso')
             yield put(BolosActions.loadSuccess(response.data))
    }
    catch(err){
            toast.error('Houve um Erro ao Carregar a Lista')
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
            toast.success('Produto Cadastrado com Sucesso')
                yield put(BolosActions.loadRequest())
      } 

     

    }
    catch(err){
         toast.error('Houve um Erro ao Cadastrar o Produto')
            yield put(BolosActions.loadFailure())
    }
}