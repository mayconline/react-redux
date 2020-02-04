// cria os types com os nomes dos reducers
export const Types = {
  SHOW_ALERT: 'mensagem/SHOW_ALERT',
  HIDE_ALERT: 'mensagem/HIDE_ALERT',
};

// cria um estado inicial no redux
const INITIAL_STATE = {
  showAlert: false,
};

// cria os reducers
export default function mensagem(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_ALERT:
      return { ...state, showAlert: true };
    case Types.HIDE_ALERT:
      return { ...state, showAlert: false };
    default:
      return state;
  }
}

// criar as actions
export const Creators = {
  showAlert: () => ({
    type: Types.SHOW_ALERT,
  }),

  hideAlert: () => ({
    type: Types.HIDE_ALERT,
  }),
};
