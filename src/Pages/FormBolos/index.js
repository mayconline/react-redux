import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as BolosActions } from '../../store/ducks/bolos';
import { Creators as MensagemActions } from '../../store/ducks/mensagem';

function FormBolos({ history, bolosAcao, mensagemAcao }) {
  // estado das values do form
  const [form, setForm] = useState({ title: '', description: '' });

  // armazena o value no estado
  const handlechange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // envia o form pro redux
  const handleSubmit = event => {
    event.preventDefault();

    // action pra add um produto na lista do estado do redux
    bolosAcao.addSuccess(form);

    try {
      // action pra aparecer uma mensagem de alerta em caso de sucesso
      mensagemAcao.showAlert();

      setForm({ title: '', description: '' });

      // dispara a action pra fazer a mensagem sumir apos 3 seg
      setTimeout(() => mensagemAcao.hideAlert(), 3000);

      // envia o usuario pra pagina da lista de produtos após o cadastro
      return history.push('/');
    } catch (e) {
      return e;
    }
  };

  return (
    <div className="container">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">titulo</label>
          <input
            id="title"
            type="text"
            name="title"
            value={form.title}
            onChange={handlechange}
            placeholder="digite um titulo"
          />

          <label htmlFor="description">Descricao</label>
          <input
            id="description"
            type="text"
            name="description"
            value={form.description}
            onChange={handlechange}
            placeholder="digite uma descrição"
          />

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

// traz os estados do redux e mapeia pra virar uma props da funcao
const mapStateToProps = state => ({
  bolos: state.bolos,
});

// traz as actions do redux e mapeia pra virar uma props da funcao
const mapDispatchToProps = dispatch => ({
  bolosAcao: bindActionCreators(BolosActions, dispatch),
  mensagemAcao: bindActionCreators(MensagemActions, dispatch),
});

// conecta a funcao Formlista ao redux
export default connect(mapStateToProps, mapDispatchToProps)(FormBolos);
