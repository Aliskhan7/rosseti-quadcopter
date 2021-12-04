const initialState = {
  items: [],
  loading: false
}

export const dataServiceRed = (state = initialState, action) => {
  switch (action.type){
    case 'data/start':
      return{
        ...state,
        loading: true
      }
    case 'data/success':
      return{
        items: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
