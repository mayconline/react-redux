export const Types={
    ADD_LISTA: 'produtos/ADD_LISTA',
    REMOVE_LISTA: 'produtos/REMOVE_LISTA'
}

const INITIAL_STATE=[
    {  
        _id:'1',
        descricao:'Bala'
    },
    {
        _id:'2',
        descricao:'Sorvete'
    },
    {
        _id:'3',
        descricao:'Caneta'
    },
    {
        _id:'4',
        descricao:'Lapis'
    }
]


export default function produtos(state=INITIAL_STATE, action){
    switch(action.type){
        case Types.ADD_LISTA:
            return [...state, action.produto];

        case Types.REMOVE_LISTA:
            return  state.filter(produto => produto._id !== action.payload._id);
        default:
            return state;  
    }

}


export const Creators = {
    addLista:(produto)=>({
        type: Types.ADD_LISTA,
       produto
        
    }),

    removeLista:(_id)=>({
        type: Types.REMOVE_LISTA,
        payload:{
            _id
        }
    })

    
}