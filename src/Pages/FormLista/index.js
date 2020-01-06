import React, {useState} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Creators as ProdutosActions} from '../../store/ducks/produtos';
import {Creators as MensagemActions} from '../../store/ducks/mensagem';



 function FormLista({addLista, }){

    const [form, setForm] = useState({_id:'', descricao:''}) 

    const handlechange = (e)=> {
        setForm({ ...form, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        addLista(form)
  
        setForm({_id:'', descricao:''})

    }

   
    return(
        <div className='container'>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor={'_id'}>id</label>
                    <input
                        id={'_id'}
                        type={'text'}
                        name={'_id'}
                        value={form._id}
                        onChange={handlechange}
                        placeholder={'digite um id'}
                    />

                    <label htmlFor={'_id'}>Descricao</label>
                    <input
                        id={'descricao'}
                        type={'text'}
                        name={'descricao'}
                        value={form.descricao}
                        onChange={handlechange}
                        placeholder={'digite um id'}
                    />

                    <button type='submit'>Cadastrar</button>


                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    produtos:state.produtos
})

const mapDispatchToProps = dispatch => bindActionCreators(ProdutosActions,dispatch);



export default connect(mapStateToProps ,mapDispatchToProps)(FormLista);