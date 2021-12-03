const initialState = {
  items: {},
  loading: false
};
export const comparis = (state = initialState, action) => {
  switch (action.type) {
    case 'comparis/success':
      return {
        items: action.payload,
        loading: true
      };

    default:
      return state;
  }
}