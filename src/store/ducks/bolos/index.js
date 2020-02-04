// cria os types com os nomes dos reducers
export const Types = {
  LOAD_REQUEST: 'bolos/LOAD_REQUEST',
  LOAD_SUCCESS: 'bolos/LOAD_SUCCESS',
  LOAD_FAILURE: 'bolos/LOAD_FAILURE',
  ADD_SUCCESS: 'bolos/ADD_SUCCESS',
};

// cria um estado inicial no redux
const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  product: {},
};

// cria os reducers
export default function bolos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_REQUEST:
      return { ...state, loading: true };
    case Types.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case Types.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        product: action.product,
      };

    default:
      return state;
  }
}

// criar as actions
export const Creators = {
  loadRequest: () => ({
    type: Types.LOAD_REQUEST,
  }),
  loadSuccess: data => ({
    type: Types.LOAD_SUCCESS,
    payload: {
      data,
    },
  }),
  loadFailure: () => ({
    type: Types.LOAD_FAILURE,
  }),
  addSuccess: product => ({
    type: Types.ADD_SUCCESS,
    product,
  }),
};
