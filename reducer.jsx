export default function reducer(state = initialState, action) {
  let userName;
  switch (action.type) {
    case '':
      return {
        ...state,
      };
    default:
      return state;
  }
}
