import React  from 'react';

import {Link} from 'react-router-dom';
 
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Creators as ProdutosActions} from '../../store/ducks/produtos'


 function Lista({produtos, removeLista}){

   

    return(
        <div className='container'>

            <div className='lista'>
                {produtos && produtos.map(produto=>(
                    <li key={produto._id}>
                        {produto.descricao}

                        <button onClick={()=>{removeLista(produto._id)}}>Deletar</button>
                    </li>
                ))}
            </div>

            <div>
                <Link to={'/cadastro'}><button >Cadastrar</button></Link>
                
            </div>

        </div>

        

        
    )
}

const mapStateToProps = state =>({
    produtos:state.produtos
})


const mapDispatchToProps = dispatch => bindActionCreators(ProdutosActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Lista);