import React ,{useEffect} from 'react';
import {connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { Creators as BolosActions} from '../../store/ducks/bolos'


function BolosLista({bolos, loading, error ,bolosAcao}){

    useEffect(()=>{bolosAcao.loadRequest()},[bolosAcao])
    
   

  
    return(
        <div>
         
            {loading && <h4>Carregando por favor aguarde...</h4>}
            {error && <h4>Houve um erro no carregamento</h4> }

            {bolos && 
                bolos.map(bolo=>(
                    <div key={bolo._id}>
                        <li>{bolo.descricao}</li>
                        <img src={bolo.url} alt={bolo.descricao} />  
                    </div>
                ))
            }
                

        </div>
    )
}

const mapStateToProps = state =>({
    bolos:state.bolos.data,
    loading:state.bolos.loading,
    error:state.bolos.error
})

const mapDispatchToProps = dispatch =>({
    bolosAcao:bindActionCreators(BolosActions,dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(BolosLista);