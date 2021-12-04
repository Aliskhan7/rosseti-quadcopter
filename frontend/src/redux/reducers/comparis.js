const initialState ={
  items: [],
}

export const comparisReduces = (state = initialState, action) =>{
  switch (action.type){
    case 'SET_COMPARIS':
      return{
        ...state,
        items: action.payload
      }
    default:
      return state
  }

}