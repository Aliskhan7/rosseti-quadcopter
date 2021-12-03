const initialState = {
  items: {},
  loading: false
};
export const education = (state = initialState, action) => {
  switch (action.type) {
    case 'education/success':
      return {
        items: action.payload,
        loading: true
      };

    default:
      return state;
  }
}