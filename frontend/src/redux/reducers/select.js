const initialState ={
  items: [],
}

export const selectReducer = (state = initialState, action) =>{
  switch (action.type){
    case 'SET_SELECT':
      return{
        ...state,
        items: action.payload
      }
    default:
      return state
  }

}