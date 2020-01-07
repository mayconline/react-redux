import React, {useState} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Creators as ProdutosActions} from '../../store/ducks/produtos';
import {Creators as MensagemActions} from '../../store/ducks/mensagem';



 function FormLista({produtosAcao, mensagemAcao , history}){

    //estado das values do form
    const [form, setForm] = useState({_id:'', descricao:''}) 

    //armazena o value no estado
    const handlechange = (e)=> {
        setForm({ ...form, [e.target.name]:e.target.value})
    }

    //envia o form pro redux
    const handleSubmit = (e)=>{

        e.preventDefault();

        //action pra add um produto na lista do estado do redux
       produtosAcao.addLista(form)
 
       try{
        //action pra aparecer uma mensagem de alerta em caso de sucesso
        mensagemAcao.showAlert()

        setForm({_id:'', descricao:''})

        // dispara a action pra fazer a mensagem sumir apos 3 seg
        setTimeout( ()=> mensagemAcao.hideAlert(), 3000)
           
        // envia o usuario pra pagina da lista de produtos após o cadastro
        history.push('/')
       
       }
       catch(e){
     
           return e
       }
       




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

//traz os estados do redux e mapeia pra virar uma props da funcao
const mapStateToProps = state =>({
    produtos:state.produtos
})

//traz as actions do redux e mapeia pra virar uma props da funcao
const mapDispatchToProps = dispatch =>({
    produtosAcao:bindActionCreators(ProdutosActions,dispatch),
    mensagemAcao:bindActionCreators(MensagemActions,dispatch)
}) 


                //conecta a funcao Formlista ao redux
export default connect(mapStateToProps ,mapDispatchToProps)(FormLista);