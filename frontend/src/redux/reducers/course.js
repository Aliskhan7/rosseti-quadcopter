const initialState ={
  items: [],
}

export const courseReduce = (state = initialState, action) =>{
  switch (action.type){
    case 'SET_COURSE':
      return{
        ...state,
        items: action.payload
      }
    default:
      return state
  }

}