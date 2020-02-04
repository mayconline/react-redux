import React from 'react';
import { connect } from 'react-redux';

function Alertas({ isShow }) {
  return <div>{isShow && <h1>Cadastrado com Sucesso</h1>}</div>;
}

// traz os estados do redux e mapeia pra virar uma props da funcao
const mapStateToProps = state => ({
  isShow: state.mensagem.showAlert,
});

// conecta a funcao Alertas ao redux
export default connect(mapStateToProps)(Alertas);
