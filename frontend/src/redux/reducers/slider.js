const initialState ={
  items: [],
  loading: false,
}

export const quadroReducer = (state = initialState, action) =>{
  switch (action.type){
    case 'SET_QUADRO':
      return{
        ...state,
        items: action.payload
      }
    default:
        return state
  }

}