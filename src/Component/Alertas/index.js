import React from 'react';

import {connect} from 'react-redux';

 function Alertas({isShow}){
    return(
        <div>
            {isShow && (<h1>Cadastrado com Sucesso</h1>)}
           
        </div>
    )
}

const mapStateToProps = state => ({
    isShow:state.mensagem.showAlert
})
export default connect(mapStateToProps)(Alertas);