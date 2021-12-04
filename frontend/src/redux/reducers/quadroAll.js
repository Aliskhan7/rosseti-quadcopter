const initialState ={
  items: [],
}

export const quadroAll = (state = initialState, action) =>{
  switch (action.type){
    case 'SET_QUADRO_All':
      return{
        ...state,
        items: action.payload
      }
    default:
      return state
  }

}